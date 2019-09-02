import React, { Component } from 'react';

import './PostList.css';
import PostItem from '../PostItem/PostItem';

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                avatar: "https://scontent.fcgr1-1.fna.fbcdn.net/v/t1.0-9/10550991_314470088727516_4929609226420041241_n.jpg?_nc_cat=102&_nc_oc=AQkeoaDXnzdwiMVjbWfu4KGgzstCfB4_-95FqSf4GsFZbp9mJn1ue_MZb-3_WVtRCn8&_nc_ht=scontent.fcgr1-1.fna&oh=248e84dba570647de2a5b28554518d74&oe=5E03C653",
                user_name: "Xôvem Nerd",
                date: "01 Set 2019",
                content: "Que dia incrível que tivemos visitando o estúdio da @quanticdreamgames em Paris! O Jovem Nerd foi convidado a conhecer todos os setores de desenvolvimento: da programação à arte, do game Logic ao Sound Design, da modelagem de cenários e personagens ao motion capture! E ainda pude capturar uma bela performance no mesmo set onde Heavy Rain, Beyond Two Souls e Detroit: Become Human foram feitos!",
                comments: [
                    {
                        id: 1,
                        avatar: "https://www.urbanarts.com.br/imagens/produtos/156229/0/Ampliada/retrato-tucano.jpg",
                        user_name: "Tucano",
                        content: "nunca imaginei o jn fazendo estrelinha logo na Quantic Dream kkkkkkk"
                    },
                    {
                        id: 2,
                        avatar: "https://pbs.twimg.com/profile_images/1060873989957083136/TQiJ9j2A_400x400.jpg",
                        user_name: "Marco Gomes",
                        content: "Demais! Quem diria que eu veria jovem nerd dando uma estrelinha Kkkkk 👏👏😮😍😂"
                    }
                ]
            },
            {
                id: 2,
                avatar: "https://scontent.fcgr1-2.fna.fbcdn.net/v/t1.0-9/14355691_1050599745037704_3729842228200249449_n.jpg?_nc_cat=106&_nc_oc=AQkPEOLPg_dFItGkVSSehRgtwYKJ2KnWf4C0qp024oL4Rqhakkou1nwFcshXZnI1f1Q&_nc_ht=scontent.fcgr1-2.fna&oh=bf388966909b723d23743960238f026a&oe=5E01432F",
                user_name: "Ximira",
                date: "01 Set 2019",
                content: "Como era aquela piadinha que o Gilbôncio fazia sobre músculos, @rex2099? Ainda não voltaram, mas já receberam o telegrama avisando que algo subiu no telhado.",
                comments: [
                    {
                        id: 1,
                        avatar: "https://pbs.twimg.com/profile_images/1161295287174029312/rJgTM84d_400x400.jpg",
                        user_name: "Eduardo Spohr",
                        content: "Rapaz meu novo incentivo pra virar monstro agora é o SR.K desculpa @rex2099 plano de vida agora é virar magnânimo monstro kk"
                    }
                ]
            },
            {
                id: 3,
                avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80",
                user_name: "Peixola",
                date: "01 Set 2019",
                content: "Nos portões da Babilônia. Museu Arqueológico de Istambul, agosto de 2008. O lugar reúne um grande acervo de arte e objetos recolhidos pelo Império Otomano desde o século XVIII. Saudades dessa viagem ;)",
                comments: [
                    {
                        id: 1,
                        avatar: "https://i.ytimg.com/vi/GgSWEJ39UsE/hqdefault.jpg",
                        user_name: "Sra. Xôvem Nerd",
                        content: "Estive lá em 2011 e foi uma das experiências mais bonitas de imersão na cultura e herança da antiguidade mediterrânea. Observei na época que os sarcófagos dos imperadores bizantinos, feitos de granito vermelho, estavam do lado de fora do museu, expostos a intempéries... viu o mesmo? Me pergunto se seria uma eventualidade, ou um sinal das antigas disputas entre gregos e turcos levadas para o campo da arqueologia. Abraços!"
                    }
                ]
            },
            {
                id: 4,
                avatar: "https://scontent.fcgr1-2.fna.fbcdn.net/v/t1.0-9/69126986_112063263486480_6682129442174664704_n.jpg?_nc_cat=105&_nc_oc=AQn_N9zplPZL6yw-aOiGOCzKjg4VY8QgGCn1m8hnRLkrNrX2FRBS-VDOS3SqdcznG9Y&_nc_ht=scontent.fcgr1-2.fna&oh=fca3f4e223ee9b613669aa340bb18676&oe=5DCEB9E7",
                user_name: "Azaghal",
                date: "01 Set 2019",
                content: "Respirando o mesmo ar que Bruce Springsteen e Martin FUCKING Scorsese! Só queria fazer essa inveja em você ¯\_(ツ)_/¯",
                comments: [
                    {
                        id: 1,
                        avatar: "https://pbs.twimg.com/profile_images/616385572475682816/aFP-nv9k_400x400.jpg",
                        user_name: "Portuguesa",
                        content: "E foram felizes para sempre... 👵🏻👴🏻"
                    }
                ]
            }
        ]
    }

    render() {
        return (
            <div className="post-list">
                {this.state.posts.map(post => (
                    <PostItem key={post.id} {...post} />
                ))}
            </div>
        );
    }
}

export default PostList;