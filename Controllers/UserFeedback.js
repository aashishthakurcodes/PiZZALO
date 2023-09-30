import Contact from "../Modals/Contact.js";

export const userFeedback=async(req,res)=>{
    try {
        const { name, email, feedback ,lname} = req.body;
        switch (true) {
          case !name:
            return res.status(400).send({ error: "Name is required" });
          case !email:
            return res.status(400).send({ error: "Email is required" });
          case !feedback:
            return res.status(400).send({ error: "Feedback is required" });
          case !lname:
            return res.status(400).send({ error: "Last name is required" });
          }
          console.log(req.body);
          const items = new Contact({ ...req.body });
          items.save();
    res.status(201).send({
      success: "true",
      message: "Feedback Getting Successfully",
      items,
    });
    }  catch (error)  {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in handling feedback",
        error: error.message, 
      });
    }
  }