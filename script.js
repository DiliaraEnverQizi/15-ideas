const amount=document.getElementById('amount');
const guests=document.getElementById('guest');
const quality=document.getElementById('quality');
const tipAmount=document.getElementById('tip-amount');
calculate=()=>{
        const tip=((amount.value*quality.value)/(guest.value)).toFixed(2);
        amount.value='';
        guests.value='';
        quality.value='';
        if(tip==='Nan'){
                tipAmount.innerHTML='Tip $0 each';
                showTipAmount();
        }
        else{
                tipAmount.innerHTML='TIp $'+tip+' each';
                showTipAmount();
        }
}
showTipAmount=()=>{
        let x=tipAmount;
        x.className='show';
        console.log("x",x);
        setTimeout(function(){x.className=x.className.replace('show','')},3000)
}