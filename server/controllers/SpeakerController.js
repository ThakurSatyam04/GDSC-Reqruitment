import Speaker from '../models/SpeakerForm.js'


export const CreateSpeaker = async(req,res,next)=>{
    const newSpeaker = new Speaker(req.body)
    try{
        const savedSpeaker = await newSpeaker.save();
        res.status(200).send(savedSpeaker);
        res.send({message:"Speaker added sucessfully"})
        console.log(savedSpeaker)
    }
    catch(err){
        next(err);
    }
}

export const GetSpeaker = async(req,res,next)=>{
    
}