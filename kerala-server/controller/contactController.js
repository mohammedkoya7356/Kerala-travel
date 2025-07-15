const Contact = require('../model/contact');
const nodemailer = require('nodemailer');
require('dotenv').config();

// POST /api/contact — Save contact form & send email
exports.submitContact = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Save to MongoDB
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // Configure email transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Message submitted and email sent!' });
  } catch (error) {
    console.error(' Error in submitContact:', error.message);
    res.status(500).json({ message: ' Server error. Please try again later.' });
  }
};

// GET /api/contact — Get all submitted messages (Admin)
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    console.error(' Error in getContacts:', error.message);
    res.status(500).json({ message: ' Failed to fetch contact messages' });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: ' Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error(' Error in deleteContact:', error.message);
    res.status(500).json({ message: ' Failed to delete contact' });
  }
};
