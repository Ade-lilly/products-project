const electronics = [
    {
        product:'Television',
        price:'N350000',
        product_id:1
    },

    {
        product:'Radio',
        price:'N100000',
        product_id:2
    },

    {
        product:'Water_dispenser',
        price:'N150000',
        product_id:3
    },

    {
        product:'Standing_fan',
        price:'N40000',
        product_id:4
    },

    {
        product:'Gas_stand',
        price:'N70000',
        product_id:5
    },

    {
        product:'Stabilizer',
        price:'N50000',
        product_id:6
    },

    {
        product:'Solar_pannel',
        price:'N378000',
        product_id:7
    },

    {
        product:'Freezer',
        price:'N250000',
        product_id:8
    }

];


let container = document.getElementById("container");
let html = "";

for(const electronic of electronics){
    html += `
<div class="unit">
    <div class="name">${electronic.product}</div>
    <div class="price">${electronic.price}</div>
    <div class="product-id">${electronic.id}</div>
</div>`;
}
container.innerHTML = html;




 