console.log('dave creation');

const titleBtn = document.getElementById('title-btn');
const assetInfoBtn = document.getElementById('asset-info-btn');
const assetInformation = document.querySelector('.asset-information');

const photoInfoBtn = document.getElementById('photo-info-btn');
const formInfoBtn = document.getElementById('form-info-btn');
const conditionInfoBtn = document.getElementById('condition-info-btn');
const backdrop = document.getElementById('backdrop');
const tddGoal = document.getElementById('tdd_goal');
const cancelBtn = document.getElementById('cancel-btn');
const assetWorks = document.getElementById('asset-works');
const assessmentDownload = document.getElementById('assessment-download');


titleBtn.addEventListener('click', toggleBackdrop);
cancelBtn.addEventListener('click', toggleBackdrop);
assetInfoBtn.addEventListener('click', assetInfoWork);
photoInfoBtn.addEventListener('click', photoInfoBtnToggle)

function toggleBackdrop() {
    backdrop.classList.toggle('visible');
    tddGoal.classList.toggle('visibletoo');
}

function assetInfoWork() {
    console.log('show me asset works');
    assetWorks.classList.toggle('visible');
}
function photoInfoBtnToggle() {
    assessmentDownload.classList.toggle('visible');
    
}
