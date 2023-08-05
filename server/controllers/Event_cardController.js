import Event_card from '../models/Form.js';

export const createCard = async(req,res,next)=>{
    const newCard = new Event_card(req.body)
    try{
        const savedCard = await newCard.save();
        res.status(200).send(savedCard);
        res.send({message:"Card added sucessfully"})
        console.log(savedCard)
    }
    catch(err){
        next(err);
    }
}

export const getCard = async(req,res,next)=>{
    try{
        const cards = await Event_card.findById(req.params.id);
        res.status(200).json(cards);
    }
    catch(e){
        next(err);
    }
}

export const getAllCards = async(req,res,next)=>{
    const{...others} = req.query;
    try{
        const cards = await Event_card.find({
            ...others,
        })
        res.status(200).json(cards);
    }
    catch(err){
        console.log(err)
    }
}

export const deleteCards = async(req,res,next)=>{
    try {
        await Event_card.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json("Event has been deleted")
    } catch (err) {
        next(err);
    }
}

export const uploadImg = async(req,res)=>{
    try {
        const cardId = req.params.id; // Assuming you're passing the card ID in the URL
        
        const { buffer } = req.file;
        const imageUrl = `data:image/jpeg;base64,${buffer.toString('base64')}`;
        
        const updatedCard = await Event_card.findByIdAndUpdate(
          cardId,
          { imageUrl }, // Update the imageUrl field
          { new: true } // Return the updated card
        );
    
        res.status(200).json({ message: 'Image uploaded and card updated successfully.', updatedCard });
      } catch (error) {
        console.error('Error uploading image and updating card:', error);
        res.status(500).json({ error: 'An error occurred while uploading the image and updating the card.' });
      }
    }

export const getImageUrl = async(req,res)=>{
    try {
        const cardId = req.params.id; // Assuming you're passing the card ID in the URL
        
        const card = await Event_card.findById(cardId);
        
        if (card) {
          res.status(200).json({ imageUrl: card.imageUrl });
        } else {
          res.status(404).json({ error: 'Card not found.' });
        }
      } catch (error) {
        console.error('Error fetching image URL for card:', error);
        res.status(500).json({ error: 'An error occurred while fetching the image URL for the card.' });
      }
}

