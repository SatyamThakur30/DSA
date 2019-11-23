

class myGraph{
    constructor(){
        this.adjectlist={}
        this.length=0
    }

    addvertex(node){
        this.adjectlist[node]=[]
        this.length++
    }
    addedge(node1,node2){
        this.adjectlist[node1].push(node2)
        this.adjectlist[node2].push(node1)
    }
    showConnections(value){
        
     return `${value }-->${this.adjectlist[value]}`
        
        
    }
}

let graph= new myGraph()
graph.addvertex("0")
graph.addvertex("1")
graph.addvertex("2")
graph.addvertex("3")
graph.addvertex("4")
graph.addvertex("5")
graph.addvertex("6")
graph.addedge('3','1')
graph.addedge('3','4')
graph.addedge('4','2')
graph.addedge('4','5')
graph.addedge('1','2')
graph.addedge('1','0')
graph.addedge('0','2')
graph.addedge('6','5')
console.log(graph.showConnections("1"));


