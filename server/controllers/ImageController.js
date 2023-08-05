import ImageModel from '../models/ImageModel.js'

export const uploadImg = async(req,res)=>{
    try {
        const { buffer } = req.file;
        const imageUrl = `data:image/jpeg;base64,${buffer.toString('base64')}`;
        
        const image = new ImageModel({ imageUrl });
        await image.save();
        
        res.status(200).json({ message: 'Image uploaded and URL stored successfully.' });
      } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: 'An error occurred while uploading the image.' });
      }
}

export const getImageUrl = async(req,res)=>{
    try {
        const image = await ImageModel.findOne().sort({ _id: -1 });
        if (image) {
          res.status(200).json({ imageUrl: image.imageUrl });
        } else {
          res.status(404).json({ error: 'Image not found.' });
        }
      } catch (error) {
        console.error('Error fetching image URL:', error);
        res.status(500).json({ error: 'An error occurred while fetching the image URL.' });
      }
}