const CategorySchema = require('../model/Category_model');


const AddCategory = async (req, res) => {
    try {
        // console.log(req.body); // Add this line
        const {category_name,category_description} = req.body;
        if (!req.file) {
            throw new Error('Category image is required');
          }
        const category_img = req.file.filename;
        

        const catdata = new CategorySchema({category_name,category_description,category_image:category_img});
        const catdatasave = await catdata.save();
        res.send(catdatasave);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("error");
    }
};

const Getcategory=async(req,res)=>{
    try{
        const category=await CategorySchema.find();
        res.send(category);
    }catch(err){
        console.log(err.message);
        res.status(500).send("Issue");
    }
}

const DeleteCategory = async (req, res) => {
    try {
        let category = await CategorySchema.findById(req.params.id);
        if (!category) {
            return res.status(404).send("Not found");
        }
        await CategorySchema.findByIdAndDelete(req.params.id);
        res.json({ "success": "Category Deleted", category: category });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error");
    }
};


const UpdateCategory = async (req, res) => {
    const { category_name, category_description, category_img } = req.body;

    try {
        const NewCategory = {};
        if (category_name) { NewCategory.category_name = category_name };
        if (category_description) { NewCategory.category_description = category_description };
        if (category_img) { NewCategory.category_image = category_img };

        let category = await CategorySchema.findByIdAndUpdate(req.params.id, {
            $set: NewCategory
        }, { new: true });

        res.json({ category });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error");
    }
};

    

module.exports= {AddCategory, Getcategory,UpdateCategory,DeleteCategory};


