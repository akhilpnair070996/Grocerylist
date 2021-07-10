
let items = [];
        
        const addItem = (ev)=>{
            console.log("Hello")
            let item = {
                Name: document.getElementById('iname').value,
                Quantity: document.getElementById('inum').value,
                Unit: document.getElementById('tbox1').value,
                Department: document.getElementById('tbox2').value,
                Notes: document.getElementById('tbox3').value
            }
            items.push(item);

                       
            document.forms[0].reset(); 

            console.warn('added' , {items} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(items, '\t', 2);

            
            localStorage.setItem("list.json", JSON.stringify(items) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('adnewbt').addEventListener('click', addItem);
        });