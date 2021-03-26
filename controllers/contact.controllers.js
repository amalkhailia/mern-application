const Contact = require ('../models/Contact')


/**
 * @desc : add contact
 * @path : 'http://localhost:7000/api/contacts/'
 * @method : POST
 * @data : req.body
 * @access: public
 */
 exports.postContact = async (req,res) => {
    try { 
        const newContact = new Contact({...req.body})
        if(!req.body.email){
            res.status(400).send({msg:'email is required'})
            return;
        }
   const contact = await Contact.findOne({email:req.body.email})
   if(contact){
    res.status(400).send('this email is already existed')
    return
   }
   const responce = await newContact.save()
    res.status(200).send({msg:'contact added successfully...',responce:responce})
    
    } catch (error) {

            res.status(400).send({msg:`can not added this contact ${error}`})

    }
   
}

/**
 * @desc : get all contacts
 * @path : 'http://localhost:7000/api/contacts/'
 * @method : GET
 * @data : req.body
 * @access: public
 */
 exports.getAllContacts = async (req,res) => {
    try { 
        const listContact = await Contact.find()
        res.status(200).send({msg:'list of contacts...',listContact})

        }
    
     catch (error) {

            res.status(400).send({msg:`can not find list of contacts ${error}`})

    }
   
}

/**
 * @desc : get one contact
 * @path : 'http://localhost:7000/api/contacts/:id'
 * @method : GET
 * @data : req.params
 * @access: public
 */
 exports.getOneContact = async (req,res) => {
    try { 
        const contactToFind = await Contact.findOne({_id: req.params.id})
        res.status(200).send({msg:'contacts find...',contactToFind})

        }
    
     catch (error) {

            res.status(400).send({msg:`can not find the contact ${error}`})

    }
   
}

/**
 * @desc : Delete one contact
 * @path : 'http://localhost:7000/api/contacts/:id'
 * @method : DELETE
 * @data : req.params
 * @access: public
 */
 exports.DeleteOneContact = async (req,res) => {
    try { 
        const {id} = req.params
       const contactToDelete = await Contact.findOneAndDelete({_id:id })
        res.status(200).send({msg:'contact is deleted...',contactToDelete})
if (!contactToDelete)
{
    res.status(400).send({msg:`contact already deleted ${error}`})
    return
}
        }
    
     catch (error) {

            res.status(400).send({msg:`can not find the contact to delete ${error}`})

    }
   
}
/**
 * @desc : Update one contact
 * @path : 'http://localhost:7000/api/contacts/:_id'
 * @method : PUT
 * @data : req.params && req.body
 * @access: public
 */
 exports.UpdateOneContact = async (req,res) => {
    try { 
        const {id} = req.params
       const contactToEdit = await Contact.updateOne({_id:id},{$set:{...req.body}})
        res.status(200).send({msg:'contact is updated ...',contactToEdit})

        }
    
     catch (error) {

            res.status(400).send({msg:`can not edit this contact ${error}`})

    }
   
}