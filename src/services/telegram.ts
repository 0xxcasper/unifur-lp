import axios from 'axios';
import { TELEGRAM_BOT_TOKEN } from '@/configs';
import { IFormValues } from '@/utils/firebase';

// Set the target group chat ID here
const GROUP_CHAT_ID = -715027051; // Replace with your group chat ID

// API endpoint for sending messages
const API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

// Function to send a message
const sendMessage = async (order: IFormValues, orderID: string) => {
  const markdownMessage = `
  \n\n*🎉 New order from Unifur Landing Page! 🎉*\n
  _ID: ${orderID}_
  _Name: ${order.userName}_
  _Phone: ${order.phoneNumber}_
  _Email: ${order.email}_
  `;
  try {
    const response = await axios.post(API_URL, {
      chat_id: GROUP_CHAT_ID,
      text: markdownMessage,
      parse_mode: 'Markdown',
    });

    if (response.data.ok) {
      console.log('Message sent successfully.');
    } else {
      console.error('Failed to send message:', response.data.description);
    }
  } catch (error: unknown) {
    console.error('Failed to send message:', error);
  }
};

export { sendMessage };
