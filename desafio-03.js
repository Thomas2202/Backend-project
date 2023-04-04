class ProductManager {

    constructor() {
        this.products = [];
    };

    addProduct(title, description, price, thumbnail, code, stock) {
        const producto = {title, description, price, thumbnail, code, stock}

        //Validar si el codigo se repite
        const validarCodigo = this.products.find(productos=> productos.code === producto.code)
        if (validarCodigo) {
            return console.log('ERROR. Codigo Repetido')
        }

        //Validar si el producto está completo
        if(!Object.values(producto).every(propiedadProducto => propiedadProducto)){
            return console.log('Producto incompleto')
        }
        
        // Agregar propiedades al objeto y generar el id autoincremental
        if(this.products.length === 0){
            producto.id = 1
        }
        else{
            producto.id = this.products.length + 1
        }

        // Finalmente agregamos nuestro producto

        this.products.push(producto)

    }
    // Obtener todos los productos
    getProducts(){
        console.log(this.products);
    }

    // Obtener el producto segun ID recibido
    getProductsById(id){
        const validarId = this.products.find(productos=> productos.id === id)
        if (validarId) {
            return console.log(this.products[id-1])
        }
        else{
            return console.log('Not found')
        }
    }
}

const instancia = new ProductManager();

instancia.addProduct('Nike Air Force 1', 'Zapatillas Nike', 60000, 'Zapatilla.jpg', 3564, 10)
instancia.addProduct('Remera Nike', 'Remera Nike negra', 9000, 'banana.pjg', 7564, 20)
instancia.addProduct('Medias adidas', 'Medias adidas', 4000, 'Anana.pjg', 8273, 100)
instancia.getProductsById(5)