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
        message:"order created successful"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/allorders", async (req, res) => {
  try {
    const Allorders = await prisma.Order.findMany({
      orderBy:{ createdAt: "desc" },
    });
    res.status(200).json(Allorders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/order/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const order = await prisma.Order.findUnique({
      where: { orderId: Number(id) },
    });

    if (!order){
        return res.status(404)
        .json({ message: "Order not found" })
    };

    return res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/orders/:id", async (req, res) => {
  try {
    const { id } = req.params;

    

    const order = await prisma.Order.findUnique({
      where: { orderId: Number(id) },
    });

    if (!order){
        return res.status(404)
        .json({ message: "Order not found" })
    };

  

    const updatedOrder = await prisma.Order.update({
      where: { orderId: Number(id) },
      data: req.body,
    });
    
   
    
    res.status(200).json({
        message:"order updated succesfully"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default router;