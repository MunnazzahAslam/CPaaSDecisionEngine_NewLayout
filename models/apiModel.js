const mongoose = require('mongoose')

const apiSchema = new mongoose.Schema({
    TransformX_Vendor_Id: { type: String, },
    TransformX_API_Id: { type: String, },
    TransformX_API_Id: { type: String, },
    TransformX_API_Data_Source: { type: String, },
    TransformX_Vendor_Name: { type: String, },
    Vendor_API_Name: { type: String, },
    Vendor_API_Description: { type: String, },
    Vendor_API_Category: { type: String, },
    TransformX_API_Name: { type: String, },
    TransformX_API_Category1: { type: String, },
    TransformX_API_Category2: { type: String, },
    TransformX_API_Cateogry: { type: String, },
    TransformX_API_Description: { type: String, },
    TransformX_API_Feature_Information_Availability: { type: String, },
    Vendor_API_Feature_1: { type: String, },
    Vendor_API_Feature_Description_1: { type: String, },
    Vendor_API_Feature_2: { type: String, },
    Vendor_API_Feature_Description_2: { type: String, },
    Vendor_API_Feature_3: { type: String, },
    Vendor_API_Feature_Description_3: { type: String, },
    Vendor_API_Feature_4: { type: String, },
    Vendor_API_Feature_Description_4: { type: String, },
    Vendor_API_Feature_5: { type: String, },
    Vendor_API_Feature_Description_5: { type: String, },
    Vendor_API_Feature_6: { type: String, },
    Vendor_API_Feature_Description_6: { type: String, },
    Vendor_API_Feature_7: { type: String, },
    Vendor_API_Feature_Description_7: { type: String, },
    Vendor_API_Feature_8: { type: String, },
    Vendor_API_Feature_Description_8: { type: String, },
    Vendor_API_Feature_9: { type: String, },
    Vendor_API_Feature_Description_9: { type: String, },
    Vendor_API_Feature_10: { type: String, },
    Vendor_API_Feature_Description_10: { type: String, },
    Vendor_API_Feature_11: { type: String, },
    Vendor_API_Feature_Description_11: { type: String, },
    Vendor_API_Feature_12: { type: String, },
    Vendor_API_Feature_Description_12: { type: String, },
    Vendor_API_Feature_13: { type: String, },
    Vendor_API_Feature_Description_13: { type: String, },
    Vendor_API_Feature_14: { type: String, },
    Vendor_API_Feature_Description_14: { type: String, },
    Vendor_API_Feature_15: { type: String, },
    Vendor_API_Feature_Description_15: { type: String, },
    Vendor_API_Feature_16: { type: String, },
    Vendor_API_Feature_Description_16: { type: String, },
    Vendor_API_Feature_17: { type: String, },
    Vendor_API_Feature_Description_17: { type: String, },
    Vendor_API_Feature_18: { type: String, },
    Vendor_API_Feature_Description_18: { type: String, },
    Vendor_API_Feature_19: { type: String, },
    Vendor_API_Feature_Description_19: { type: String, },
    Vendor_API_Feature_20: { type: String, },
    Vendor_API_Feature_Description_20: { type: String, },
    Vendor_API_Feature_21: { type: String, },
    Vendor_API_Feature_Description_21: { type: String, },
    Vendor_API_Feature_22: { type: String, },
    Vendor_API_Feature_Description_22: { type: String, },
    Vendor_API_Feature_23: { type: String, },
    Vendor_API_Feature_Description_23: { type: String, },
    Vendor_API_Feature_24: { type: String, },
    Vendor_API_Feature_Description_24: { type: String, },
    Vendor_API_Feature_25: { type: String, },
    Vendor_API_Feature_Description_25: { type: String, },
    Vendor_API_Feature_26: { type: String, },
    Vendor_API_Feature_Description_26: { type: String, },
    Vendor_API_Feature_27: { type: String, },
    Vendor_API_Feature_Description_27: { type: String, },
    Vendor_API_Feature_28: { type: String, },
    Vendor_API_Feature_Description_28: { type: String, },
    Vendor_API_Feature_29: { type: String, },
    Vendor_API_Feature_Description_29: { type: String, },
    Vendor_API_Feature_30: { type: String, },
    Vendor_API_Feature_Description_30: { type: String, },
    Vendor_API_Feature_31: { type: String, },
    Vendor_API_Feature_Description_31: { type: String, },
    Vendor_API_Feature_32: { type: String, },
    Vendor_API_Feature_Description_32: { type: String, },
    Vendor_API_Feature_33: { type: String, },
    Vendor_API_Feature_Description_33: { type: String, },
    Vendor_API_Feature_34: { type: String, },
    Vendor_API_Feature_Description_34: { type: String, },
    Vendor_API_Feature_35: { type: String, },
    Vendor_API_Feature_Description_35: { type: String, },
    Vendor_API_Feature_36: { type: String, },
    Vendor_API_Feature_Description_36: { type: String, },
    Vendor_API_Feature_37: { type: String, },
    Vendor_API_Feature_Description_37: { type: String, },
    Vendor_API_Feature_38: { type: String, },
    Vendor_API_Feature_Description_38: { type: String, }
});

module.exports = mongoose.model("cpaas_apis", apiSchema)