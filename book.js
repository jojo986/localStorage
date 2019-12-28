amt = [];
tkt = [];

book = (no,tamt,curele)=> {
    //console.log(no,tamt,curele);

    if (tkt.indexOf(no) > -1) {
        console.log("Exist");
    } else {
        tkt.push(no);
        amt.push(tamt);
        //console.log(tkt,amt);

        val1 = tkt.join(",");
        //console.log(val1);

        val2 = amt.join("+");
        //console.log(val2);

        val_amt = eval(val2);
        //console.log(val_amt);

        document.querySelector(".tktno").innerHTML = val1;
        document.querySelector(".tamt").innerHTML = val_amt;

        curele.style.background = "red";
        curele.style.color = "#fff";


        for_local_no = JSON.stringify(tkt);
        localStorage.setItem("Ticket",for_local_no);

        for_local_amt = JSON.stringify(amt);
        localStorage.setItem("Amount",for_local_amt);
    }
    
}

box = document.querySelectorAll(".box");

getval = ()=> {
    noAns = localStorage.getItem("Ticket");
    //console.log(noAns);

    if (noAns === null) {
        tkt = [];
        amt = [];
    } else {
        tkt = JSON.parse(localStorage.getItem("Ticket"));
        amt = JSON.parse(localStorage.getItem("Amount"));
        console.log(tkt, amt);
    }

    box.forEach((val,index)=>{
        //console.log(val);
        //console.log(val.attributes.for.value);

        id = Number(val.attributes.for.value);
        //console.log(id);

        if(tkt.indexOf(id) != -1) {
            val.style.background = "red";
            val.style.color = "#fff";
        }
    })

    val1 = tkt.join(",");
    val2 = amt.join("+");

    val_amt = eval(val2);

    document.querySelector(".tktno").innerHTML = val1;
    document.querySelector(".tamt").innerHTML = val_amt;

}

remove = ()=> {
    localStorage.removeItem("Ticket");
    localStorage.removeItem("Amount");
}