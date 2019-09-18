import React, {Component} from 'react';
import  ItemPost from './showPost/showPosts';
import ModalRemove from  './modalPostRemove';



export default class Main extends  Component{
    constructor(props){
        super(props);
        this.state={
            post:[],
            modalRemove:false
        };
    }

    render(){
        return(
            <main>
                {
                    this.state.post.map((item,i)=>(
                        <div key={i} className={'post'}>
                            <ItemPost params = {item} remove = {this.removeItem}/>
                        </div>
                    ))

                }
                {
                    this.state.modalRemove ? <ModalRemove params = {this.state.modalRemove} modalShow={this.toggleRemove}/> : null
                }


            </main>
        )

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>res.json())
            .then((items)=>{
                this.setState({
                    post : [...items]
                })
            })
    };



    //удаляет пост и перезаписывает state
    removeItem = (id) => {
        let newArray = this.state.post.filter((item)=> item.id!==id);
        this.setState({
            post: [...newArray],
            modalRemove:!this.state.modalRemove
        })
    };


    //управляет модальным окном который показывает что пост удален
    toggleRemove = (modal) => {
        this.setState({
            modalRemove: !modal
        })
    }
}
