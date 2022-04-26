class LogicaApi
{

        constructor()
        {
            this.productos = [{id:1,title :'nombre',price:1800,thumbnail:'https://www.google.cl'},{id:2,title :'jc',price:1210,thumbnail:'https://www.etc.cl'}]
        }

        getProductos()
        {
            return this.productos;
        }

        getProducto(id_search)
        {
            
            let nodo   =  this.productos.find( element=>{ return element.id == id_search})

            if(nodo)
                return nodo
            else 
                return {error : 'producto no encontrado'}

        }

        getMaxId()
        {
            let indice = 0

            if(!this.productos)
                return 1

            let nodo    = this.productos.forEach((item,index,arr)=>{
                    
                if(item.id > indice)
                    indice = item.id
                })

            return indice++
        }
        store(body)
        {
            this.productos.push({id:this.getMaxId()+1,
                title:body.title,
                price:body.price,
                thumbnail:body.thumbnail})

            return this.productos
        }
        deleteById(id_search = 0)
        {
            let indice = 0
            let item   =  this.productos.find( element=>{ return element.id == id_search})
            if(!item) return {'error': 'producto no encontrado'}
            let nodo    = this.productos.forEach((item,index,arr)=>{
                    
                        if(item.id == id_search)
                        indice =index
                        else
                            return null
                })
            this.productos.splice(indice,1);
            

        }
        update(body)
        {

            let nodo   =  this.productos.find( element=>{ return element.id == body.id})
            if(!nodo) return {'error': 'producto no encontrado'}

            let id_tmp = nodo.id

            this.deleteById(id_tmp)

            this.productos.push({id:id_tmp,
                title:body.title,
                price:body.price,
                thumbnail:body.thumbnail})

            return this.productos
        }
}

module.exports = LogicaApi