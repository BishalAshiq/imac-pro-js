const memory1 = document.getElementById('memory-8');
const memory2 = document.getElementById('memory-16');
const extraMemory = document.getElementById('extra-memory');

const storage1 = document.getElementById('storage-256');
const storage2 = document.getElementById('storage-512');
const storage3 = document.getElementById('storage-1T');
const extraStorage = document.getElementById('extra-storage');

const free = document.getElementById('delivery-free');
const charge = document.getElementById('delivery-20')
const deliveryField = document.getElementById('delivery-charge');

memory1.addEventListener('click', function(){
    extraMemory.innerText = '0'
    totalUpdate();
})
memory2.addEventListener('click', function(){
    extraMemory.innerText = '180';
    totalUpdate();
})

storage1.addEventListener('click', function(){
    extraStorage.innerText = '0'
    totalUpdate();
})
storage2.addEventListener('click', function(){
    extraStorage.innerText = '100'
    totalUpdate();
})
storage3.addEventListener('click', function(){
    extraStorage.innerText = '180'
    totalUpdate();
})

free.addEventListener('click', function(){
  deliveryField.innerText = '0';
  totalUpdate()
})
charge.addEventListener('click', function(){
  deliveryField.innerText = '20';
  totalUpdate()
})

// Total Update
function totalUpdate(){
    console.log(deliveryField.innerText, extraStorage.innerText, extraMemory.innerText);
}




