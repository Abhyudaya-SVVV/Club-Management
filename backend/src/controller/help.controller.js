import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import transporter from '../utils/nodemailer.js'


// 1. Contact Admin Controller
const contactAdmin = asyncHandler(async (req, res) => {
  try {
      const { name, email, message } = req.body;

      const mailOptions = {
          from: email,
          to: 'abhyudayacodingclub@svvv.edu', 
          subject: 'Contact Admin Request',
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      await transporter.sendMail(mailOptions);

      return res.status(200).json(new ApiResponse(200, null, "Your message has been sent to the admin successfully."));
  } catch (error) {
      throw new ApiError(500, error?.message || "Unable to send your message to the admin.");
  }
});




// 2. FAQ Controller
const faq = asyncHandler(async (req, res) => {
    try {
        const faqs = [
            {
                question: "How do I reset my password?",
                answer: "Click on the 'Forgot Password' link on the login page and follow the instructions."
            },
            {
                question: "How can I contact customer support?",
                answer: "Email us at support@example.com or call (123) 456-7890."
            },
            {
                question: "What is the return policy?",
                answer: "You can return products within 30 days of purchase. Visit our return policy page for details."
            }
            // Add more FAQs as needed
        ];

        return res.status(200).json(new ApiResponse(200, faqs, "FAQ list fetched successfully."));
    } catch (error) {
        throw new ApiError(500, error?.message || "Unable to fetch FAQ list.");
    }
});

// 3. Feedback Controller
const feedback = asyncHandler(async (req, res) => {
  try {
      const { name, email, feedbackMessage } = req.body;

      const mailOptions = {
          from: email,
          to: 'feedback@example.com', // Feedback email
          subject: 'User Feedback',
          text: `Name: ${name}\nEmail: ${email}\nFeedback: ${feedbackMessage}`,
      };

      await transporter.sendMail(mailOptions);

      return res.status(200).json(new ApiResponse(200, null, "Your feedback has been sent successfully."));
  } catch (error) {
      throw new ApiError(500, error?.message || "Unable to send your feedback.");
  }
});

export {
    contactAdmin,
    faq,
    feedback
};
