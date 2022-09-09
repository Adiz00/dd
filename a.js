var phones=[
    {
    phone:'apple',
    phoneModels:[
        {modelName:'a1',modelRam:'a1Ram1',modelRom:'a1Rom1',modelCam:'a1Cam1'},
        {modelName:'a2',modelRam:'a2Ram2',modelRom:'a2Rom2',modelCam:'a2Cam2'},
        {modelName:'a3',modelRam:'a3Ram3',modelRom:'a3Rom3',modelCam:'a3Cam3'},
    ],
},
{
    phone:'samsung',
    phoneModels:[   
        {modelName:'s1',modelRam:'s1Ram1',modelRom:'s1Rom1',modelCam:'s1Cam1'},
        {modelName:'s2',modelRam:'s2Ram2',modelRom:'s2Rom2',modelCam:'s2Cam2'},
        {modelName:'s3',modelRam:'s3Ram3',modelRom:'s3Rom3',modelCam:'s3Cam3'},
    ],
},
{
    phone:'nokia',
    phoneModels:[     
        {modelName:'n1',modelRam:'n1Ram1',modelRom:'n1Rom1',modelCam:'n1Cam1'},
        {modelName:'n2',modelRam:'n2Ram2',modelRom:'n2Rom2',modelCam:'n2Cam2'},
        {modelName:'n3',modelRam:'n3Ram3',modelRom:'n3Rom3',modelCam:'n3Cam3'},
    ],
}
];
var phoneId;
var modelId;

function updatePhone(){
    var phone = document.getElementById('phone');
	var phoneOption = phone.options[phone.selectedIndex];

    document.getElementById('phoneData').innerHTML = phoneOption.value;
    
    // finding phone id
    for(let i=0;i<phone.length;i++){
        if(phoneOption.value === phones[i].phone){
            phoneId=i;
            console.log("phone id "+phoneId);
            createModelDropdownOptions(phoneId);
            break;
        }
        
    }
    
    
    // var model = document.getElementById('model');
	// var modelOption = model.options[model.selectedIndex];

}
function createModelDropdownOptions(phoneId){
console.log('model hit...');

document.getElementById("model").options.length=0;

for(let i=0; i<phones[phoneId].phoneModels.length; i++){
    var model = document.getElementById('model'),
    opt = document.createElement("option");
opt.value = phones[phoneId].phoneModels[i].modelName;
opt.textContent = phones[phoneId].phoneModels[i].modelName;
opt.id = i;
model.appendChild(opt);
}
    
}

function updateModel(){
    
    var model = document.getElementById('model');
	var modelOption = model.options[model.selectedIndex];
    document.getElementById('modelData').innerHTML = modelOption.value;

    var modelRam = document.getElementById('modelRam');
    var modelRom = document.getElementById('modelRom');
    var modelCamera = document.getElementById('modelCamera');
    
    modelId=modelOption.id;
    console.log(modelOption.id);

    modelRam.innerHTML=phones[phoneId].phoneModels[modelId].modelRam;
    modelRom.innerHTML=phones[phoneId].phoneModels[modelId].modelRom;
    modelCamera.innerHTML=phones[phoneId].phoneModels[modelId].modelCam;
}
// ---------------------------------------------------------------------------------
