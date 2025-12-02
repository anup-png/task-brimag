import { Router } from 'express';
import prisma from '../db/db.js';

const router = Router();

router.post("/createorder", async (req, res) => {
  try {
    const { productName, quantity, status } = req.body;
    

    const order = await prisma.Order.create({
      data: {
        productName,
        quantity: Number(quantity),
        status,
      },
    });

    
    res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/allorders", async (req, res) => {
  try {
    const allOrders = await prisma.Order.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json(allOrders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/order/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const order = await prisma.Order.findUnique({
      where: { orderId: id }, // <-- changed
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    return res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/orders/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const order = await prisma.Order.findUnique({
      where: { orderId: id }, // <-- changed
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const updatedOrder = await prisma.Order.update({
      where: { orderId: id }, // <-- changed
      data: req.body,
    });

    res.status(200).json({
      message: "Order updated successfully",
      updatedOrder
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
