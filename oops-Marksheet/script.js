class Students {

    setelement(stuName='' , stuAge=0 , stuSTD=0 , MATHS='' , PHYSICS='',CHEMISTRY='', COMPUTER='' ){
        
        this.name = stuName ;
        this.age = stuAge;
        this.std = stuSTD;
        this.sub1 = MATHS;
        this.sub2 = PHYSICS;
        this.sub3 = CHEMISTRY;
        this.sub4 = COMPUTER;
    }
    totalAndPercentage(){
        let m1 = parseInt(this.sub1);
        let m2 = parseInt(this.sub2);
        let m3 = parseInt(this.sub3);
        let m4 = parseInt(this.sub4);
        this.total = m1 + m2 + m3 + m4;
        this.percentage = (this.total / 400)*100;
        console.log(this.total);
        console.log(this.percentage);

        if (this.percentage >= 90) {
            this.grade = "Congratulations ! you are passed with A+ grade";
        } else if (this.percentage >= 80) {
            this.grade = "Congratulations ! you are passed with A grade";
        } else if (this.percentage >= 70) {
            this.grade = "Congratulations ! you are passed with B grade";
        } else if (this.percentage >= 60) {
            this.grade = "you are passed with C grade";
        } else if (this.percentage >= 50) {
            this.grade = "you are passed with D grade";
        } else {
            this.grade = "Sorry ! you are Fail";
        }
    
    }
    getelement(){

        // console.log ("name : " + this.name );
        // console.log ("age : " + this.age );
        // console.log ("std : " + this.std );
        // console.log ("MATHS : " + this.sub1 );
        // console.log ("PHYSICS : " + this.sub2 );
        // console.log ("CHEMISTRY : " + this.sub3 );
        // console.log ("COMPUTER : " + this.sub4 );

        return{
           name: this.name, age : this.age, std : this.std, MATHS :this.sub1, PHYSICS : this.sub2 , CHEMISTRY : this.sub3, COMPUTER : this.sub4
        }

    }
}

function generateResult(){
    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    let std = document.querySelector('#std').value;
    let sub1 = document.querySelector('#mathsMarks').value;
    let sub2 = document.querySelector('#physicsMarks').value;
    let sub3 = document.querySelector('#chemMarks').value;
    let sub4 = document.querySelector('#compMarks').value;
    let marksheet = document.querySelector('#marksheet');
    marksheet.style.display='block'

    var sName = document.querySelector('h3');
    var sAge = document.querySelector('#ageR');
    var sSTD = document.querySelector('#stdR');
    var mark1 = document.querySelector('#sub1M');
    var mark2 = document.querySelector('#sub2M');
    var mark3 = document.querySelector('#sub3M');
    var mark4 = document.querySelector('#sub4M');

    let s = new Students();
    s.setelement(name,age,std,sub1,sub2,sub3,sub4);
    let obj = s.getelement();
    console.log(obj);

    sName.innerHTML = "NAME = " + obj.name;
    sAge.innerHTML = "AGE = " + obj.age;
    sSTD.innerHTML = "Standard = " + obj.std;
    mark1.innerHTML = obj.MATHS;
    mark2.innerHTML = obj.PHYSICS;
    mark3.innerHTML =  obj.CHEMISTRY;
    mark4.innerHTML =  obj.COMPUTER;

    s.totalAndPercentage();
    let finalResult = document.querySelector('#totalMarks');
    finalResult.innerHTML = "Total Marks : " +s.total+"<br></br>"+"Percentage : " +s.percentage+"%"+"<br></br>"+ s.grade;
    

    // if(s.percentage >= '100'){
    //     console.log("congratulations ! you have got A grade")
    // }
    
}

// let s1 = new Students;
// s1.getelement('harshita' , 19 , 12 , 90 , 88 , 95 , 90  ,85 )
// s1.setelement()

// let s2 = new Students;
// s2.getelement('misha' , 19 , 12 , 80 , 88 , 85 , 90  ,95 )
// s2.setelement()

// let s3 = new Students;
// s3.getelement('zeel' , 19 , 12 , 95 , 94 , 85 , 83  ,90 )
// s3.setelement()

// let s4 = new Students;
// s4.getelement('hasti' , 20 , 12 , 85 , 88 , 85 , 88  ,80 )
// s4.setelement()

// let s5 = new Students;
// s5.getelement('lakshi' , 19 , 12 , 90 , 98 , 85 , 90  ,95 )
// s5.setelement()

// let s6 = new Students;
// s6.getelement('dharmi' , 19 , 12 , 88 , 98 , 85 , 90  ,86 )
// s6.setelement()