const mongoose = require('mongoose')

const usecasesSchema = new mongoose.Schema({
    TransformX_Vendor_Id: { type: String, },
    TransformX_Usecase_Id: { type: String, },
    TransformX_Usecase_Data_Source: { type: String, },
    TransformX_Vendor_Name: { type: String, },
    Vendor_Usecase_Name: { type: String, },
    Vendor_Usecase_Class: { type: String, },
    Vendor_Usecase_Industry: { type: String, },
    Vendor_Usecase_Description: { type: String, },
    TransformX_Usecase_Class: { type: String, },
    TransformX_Usecase_Name: { type: String, },
    TransformX_Usecase_Industry: { type: String, },
    TransformX_Usecase_Category: { type: String, },
    TransformX_Usecase_Description: { type: String, },
    Ahmed_TransformX_Usecase_Description: { type: String, },
    TransformX_Usecase_Value_Information_Availability: { type: String, },
    Vendor_Usecase_Value_Generated_1: { type: String, },
    Vendor_Usecase_Value_Generated_2: { type: String, },
    Vendor_Usecase_Value_Generated_3: { type: String, },
    Vendor_Usecase_Value_Generated_4: { type: String, },
    Vendor_Usecase_Value_Generated_5: { type: String, },
    Vendor_Usecase_Value_Generated_6: { type: String, },
    Vendor_Usecase_Value_Generated_7: { type: String, },
    Vendor_Usecase_Value_Generated_8: { type: String, },
    Vendor_Usecase_Value_Generated_9: { type: String, },
    Vendor_Usecase_Value_Generated_10: { type: String, },
    TransformX_Usecase_Value_Generated: { type: String, },
    TransformX_Usecase_Process_Information_Availability: { type: String, },
    Vendor_Usecase_Process_Step_1: { type: String, },
    Vendor_Usecase_Process_Step_2: { type: String, },
    Vendor_Usecase_Process_Step_3: { type: String, },
    Vendor_Usecase_Process_Step_4: { type: String, },
    Vendor_Usecase_Process_Step_5: { type: String, },
    Vendor_Usecase_Process_Step_6: { type: String, },
    TransformX_Usecase_Process: { type: String, },
    TransformX_Usecase_API_Information_Availability: { type: String, },
    Vendor_API_Name_1: { type: String, },
    TransformX_API_Name_1: { type: String, },
    TransformX_API_Id_1: { type: String, },
    Vendor_API_Name_2: { type: String, },
    TransformX_API_Name_2: { type: String, },
    TransformX_API_Id_2: { type: String, },
    Vendor_API_Name_3: { type: String, },
    TransformX_API_Name_3: { type: String, },
    TransformX_API_Id_3: { type: String, },
    Vendor_API_Name_4: { type: String, },
    TransformX_API_Name_4: { type: String, },
    TransformX_API_Id_4: { type: String, },
    Vendor_API_Name_5: { type: String, },
    TransformX_API_Name_5: { type: String, },
    TransformX_API_Id_5: { type: String, },
    Vendor_API_Name_6: { type: String, },
    TransformX_API_Name_6: { type: String, },
    TransformX_API_Id_6: { type: String, },
    Vendor_API_Name_7: { type: String, },
    TransformX_API_Name_7: { type: String, },
    TransformX_API_Id_7: { type: String, },
    Vendor_API_Name_8: { type: String, },
    TransformX_API_Name_8: { type: String, },
    TransformX_API_Id_8: { type: String, },
    Vendor_API_Name_9: { type: String, },
    TransformX_API_Name_9: { type: String, },
    TransformX_API_Id_9: { type: String, },
    Vendor_API_Name_10: { type: String, },
    TransformX_API_Name_10: { type: String, },
    TransformX_API_Id_10: { type: String, },
    Row_Status_Daniyal: { type: String, },
    Row_Status_Azeem: { type: String, }
});

module.exports = mongoose.model("cpaas_use_cases", usecasesSchema)