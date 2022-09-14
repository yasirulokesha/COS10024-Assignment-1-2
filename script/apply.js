function OtherSkills() {
    var OtherSkillTick = document.getElementById("skill4");
    var OtherSkills = document.getElementById("other_skills");

    if (OtherSkillTick.checked == true) {
        OtherSkills.style.display = "inline";
    } else {
        OtherSkills.style.display = "none";
    }
}

function validate() {
    var errcount = 0;

    var FirstName = document.getElementById('First_Name');
    var LastName = document.getElementById("Last_Name");
    var dobElement = document.getElementById("DOB");
    var State = document.getElementById("State");
    var PostCode = document.getElementById("post_code");
    var Mail = document.getElementById("Mail");
    var PhoneNumber = document.getElementById("telephone");
    var OtherSkillTick = document.getElementById("skill4");
    var OtherSkills = document.getElementById("other_skills");

    var dob = document.getElementById("DOB").value.split(/[-]/);
    var today = new Date();

    var TextPattern = /^[A-Za-z]+$/;
    var MailPattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    var PhoneNumberPattern = /^\d{10}$/;

    if (!(FirstName.value.match(TextPattern)) || FirstName.value == null) {
        errcount = errcount + 1;
        FirstName.nextElementSibling.style.display = "inline";
    } else {
        FirstName.nextElementSibling.style.display = "none";
    }
    if (LastName.value == null) {
        errcount = errcount + 1;
        LastName.nextElementSibling.style.display = "inline";
    } else {
        LastName.nextElementSibling.style.display = "inline";
    }

    var age = today.getFullYear() - dob[0];

    if (age < 15 || age > 80) {
        errcount = errcount + 1;
        dobElement.nextElementSibling.style.display = "inline";
    } else {
        dobElement.nextElementSibling.style.display = "inline";
    }

    var PostCodePattern = '';

    switch (State.value) {
        case 'VIC':
            PostCodePattern = /(^3|^8)[0-9]{3}/
            break
        case 'NSW':
            PostCodePattern = /(^1|^2)[0-9]{3}/
            break
        case 'QLD':
            PostCodePattern = /(^4|^9)[0-9]{3}/
            break
        case 'NT':
            PostCodePattern = /^0[0-9]{3}/
            break
        case 'WA':
            PostCodePattern = /^6[0-9]{3}/
            break
        case 'SA':
            PostCodePattern = /^5[0-9]{3}/
            break
        case 'TAS':
            PostCodePattern = /^7[0-9]{3}/
            break
        case 'ACT':
            PostCodePattern = /^0[0-9]{3}/
            break
        default:
            break;
    }

    if (!(PostCode.value.match(PostCodePattern))) {
        errcount = errcount + 1;
        PostCode.nextElementSibling.style.display = "inline";
    } else {
        PostCode.nextElementSibling.style.display = "inline";
    }

    if (!(Mail.value.match(MailPattern))) {
        errcount = errcount + 1;
        Mail.nextElementSibling.style.display = "inline";
    } else {
        Mail.nextElementSibling.style.display = "inline";
    }

    if (!(PhoneNumber.value.match(PhoneNumberPattern))) {
        errcount = errcount + 1;
        PhoneNumber.nextElementSibling.style.display = "inline";
    } else {
        PhoneNumber.nextElementSibling.style.display = "inline";
    }

    if (OtherSkillTick.checked == true && OtherSkills == NULL) {
        OtherSkills.nextElementSibling.style.display = "inline";
    } else {
        OtherSkills.nextElementSibling.style.display = "inline";
    }

    if (errcount > 0) {
        return false;
    }
    else {
        return true;
    }
}

function init() {
    var SessionData = sessionStorage;

    // var FirstName = document.getElementById('First_Name');
    // var LastName = document.getElementById("Last_Name");
    // var dobElement = document.getElementById("DOB");
    // var Address = document.getElementById("Address");
    // var State = document.getElementById("State");
    // var PostCode = document.getElementById("post_code");
    // var Mail = document.getElementById("Mail");
    // var PhoneNumber = document.getElementById("telephone");
    var jobRefNo = document.getElementById('Ref');



    if (sessionStorage.getItem("RefNo") && jobRefNo) {
        jobRefNo.value = sessionStorage.getItem("RefNo");
    }
    // if (SessionData.getItem('SessionFirstName') && FirstName) {
    //     FirstName.value = SessionData.getItem('SessionFirstName');
    // }
    // if (SessionData.getItem('SessionLastName') && LastName) {
    //     LastName.value = SessionData.getItem('SessionLastName');
    // }
    // if (SessionData.getItem('Sessiondob') && dobElement) {
    //     dobElement.value = SessionData.getItem('Sessiondob');
    // }
    // if (SessionData.getItem('SessionAddress') && Address) {
    //     Address.value = SessionData.getItem('SessionAddress');
    // }
    // if (SessionData.getItem('SessionState') && State) {
    //     State.value = SessionData.getItem('SessionState');
    // }
    // if (SessionData.getItem('SessionPostCode') && PostCode) {
    //     PostCode.value = SessionData.getItem('SessionPostCode');
    // }
    // if (SessionData.getItem('SessionMail') && Mail) {
    //     Mail.value = SessionData.getItem('SessionMail');
    // }
    // if (SessionData.getItem('SessionPhoneNumber') && PhoneNumber) {
    //     PhoneNumber.value = SessionData.getItem('SessionPhoneNumber');
    // }


    var Form = document.getElementById("ApplyForm");

    Form.onsubmit = validate;

}



window.onload = init;