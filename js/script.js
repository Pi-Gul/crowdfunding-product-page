const backThisButton = document.querySelector('.back-this-project');
const modalSuccess = document.querySelector('.modal-wrapper.success');
const modalSuccessClose = document.querySelector('.got-it');
const modalSelection = document.querySelector('.modal-wrapper.selection');
const modalSelectionClose = document.querySelector('.modal-close');
const pledgeRadioBamboo = document.getElementById('bamboo');
const pledgeRadioBlack = document.getElementById('black');
const enterPledgeBamboo = document.querySelector('.enter-pledge.bamboo');
const enterPledgeBlack = document.querySelector('.enter-pledge.black');
const enterContinueButton = document.querySelector('.enter-continue');
const selectRewardButtonArray = document.querySelectorAll('.select-reward');
const bookmarkWrapper = document.querySelector('.bookmark-wrapper');
const bookmarkButton = document.querySelector('.bookmark-button');
const bookmarkIcon = document.querySelector('.bookmark-icon');
const progressBar = document.querySelector('.progress-bar');

function openModalSuccess() {
    modalSuccess.style.display = 'block';
}
function closeModalSuccess() {
    modalSuccess.style.display = 'none';
}
function openModalSelection() {
    modalSelection.style.display = 'block';
}
function closeModalSelection() {
    modalSelection.style.display = 'none';
}


modalSuccessClose.addEventListener('click', closeModalSuccess);
backThisButton.addEventListener('click', openModalSelection);
modalSelectionClose.addEventListener('click', closeModalSelection);


function displayEnterPledge() {
    if(pledgeRadioBamboo === document.activeElement) {
        enterPledgeBamboo.style.display = 'flex';
    } else if (pledgeRadioBamboo !== document.activeElement) {
        enterPledgeBamboo.style.display = 'none';
    };
    if(pledgeRadioBlack === document.activeElement) {
        enterPledgeBlack.style.display = 'flex';
    } else if (pledgeRadioBlack !== document.activeElement) {
        enterPledgeBlack.style.display = 'none';
    };
}

modalSelection.addEventListener('change', displayEnterPledge);

function clickContinue() {
    closeModalSelection();
    openModalSuccess();
}

enterContinueButton.addEventListener('click', clickContinue);

function clickBookmark() {
    if(bookmarkButton.innerHTML === 'Bookmark') {
        bookmarkButton.innerHTML = 'Bookmarked';
        bookmarkButton.style.color = 'green';
        bookmarkIcon.setAttribute('src', './images/icon-bookmark-green.svg');
    } else {
        bookmarkButton.innerHTML = 'Bookmark';
        bookmarkButton.style.color = 'black';
        bookmarkIcon.setAttribute('src', './images/icon-bookmark.svg');
    }

}

bookmarkWrapper.addEventListener('click', clickBookmark);

function updateMoney(amount) {
    let money = document.querySelector('.money');
    let totalMoney = document.querySelector('.total-money');
    let updatedMoney = parseInt(money.innerHTML.replace(/\,/g,"")) + amount;
    money.innerHTML = updatedMoney;
}
function updateBackers() {
    let backers = document.querySelector('.backers');
    let updatedBackers = parseInt(backers.innerHTML.replace(/\,/g,"")) + 1;
    backers.innerHTML = updatedBackers;
}
function updateProgressBar() {
    const money = document.querySelector('.money').innerHTML.replace(/\,/g,"");
    const totalMoney = document.querySelector('.total-money').innerHTML.replace(/\,/g,"");
    let progress = (money / totalMoney) * 100;
    let fullProgress = progress.toString(10) + '%';
    progressBar.style.width = fullProgress;
}
function handleReward(ev) {
    console.log(ev.target);
    let amount = 0;
    if(ev.target.classList.contains('bamboo')) {
        amount = 25;
    } else if(ev.target.classList.contains('black')) {
        amount = 75;
    } else if(ev.target.classList.contains('mahogany')) {
        amount = 200;
    };
    updateMoney(amount);
    updateBackers();
    updateProgressBar();
}

selectRewardButtonArray.forEach((button) => {
    button.addEventListener('click', openModalSuccess);
    button.addEventListener('click', handleReward);
});
