import { getReceiverSocketId, io } from "../SocketIO/server.js";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;

    // Validate message
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const { id: receiverId } = req.params; // Receiver ID from route
    const senderId = req.user._id; // Current logged-in user

    // Validate sender and receiver are not the same
    if (senderId.toString() === receiverId.toString()) {
      return res.status(400).json({ error: "Sender and receiver cannot be the same." });
    }

    // Log IDs for debugging
    console.log("Sender ID:", senderId);
    console.log("Receiver ID:", receiverId);

    // Find or create conversation
    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        members: [senderId, receiverId],
      });
    }

    // Create and save new message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    conversation.messages.push(newMessage._id);

    await Promise.all([conversation.save(), newMessage.save()]); // Save both in parallel

    // Emit new message to receiver via socket
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: chatUserId } = req.params; // User with whom chat is happening
    const senderId = req.user._id; // Current logged-in user

    // Ensure sender and receiver are not the same
    if (senderId.toString() === chatUserId.toString()) {
      return res.status(400).json({ error: "Cannot fetch messages for the same user." });
    }

    // Find the conversation
    const conversation = await Conversation.findOne({
      members: { $all: [senderId, chatUserId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]); // No conversation found, return empty array
    }

    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessage:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
