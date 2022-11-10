import React from "react";
import { createContext } from "react";

export const MainContext = createContext();

export default function AuthProvider({children}){
    let data = {
        pessoas:{
            total: 0,
            totalsemcrianca:0,
            homens: 0,
            mulher: 0,
            crianca: 0,
            totalkilos: 0,
            totallitrosa: 0,
            totallitrosc: 0
        },
        quantidade:{
            qntCarne:0,
            qntBebida:0,
            qntBebidac:0,
            qntExtra:0,
        },
        cortes: [
            {
                nome: "Picanha",
                status: false,
                precototal: 0,
                preco: 69.96
            },
            
            {
                nome: "Contra Filé",
                status: false,
                precototal: 0,
                preco: 45.96
            },
            
            {
                nome: "Maminha",
                status: false,
                precototal: 0,
                preco: 49.96
            },
            
            {
                nome: "Costelinha",
                status: false,
                precototal: 0,
                preco: 34.96
            },

            {
                nome:"Liguiça",
                status: false,
                precototal: 0,
                preco: 18.96
            },
            
            {
                nome: "Picanha Suína",
                status: false,
                precototal: 0,
                preco: 29.96
            },
            
            {
                nome: "Coxa e Sobrecoxa",
                status: false,
                precototal: 0,
                preco: 17.96
            },

            {
                nome: "Coração",
                status: false,
                precototal: 0,
                preco: 25.46
            },

            {
                nome: "Asa",
                status: false,
                precototal: 0,
                preco: 15.96
            },
        ],
        bebidas: [
            {
                nome: "Água",
                status: false,
                precototal: 0,
                preco: 5.00
            },

            {
                nome: "Refrigerante",
                status: false,
                precototal: 0,
                preco: 8.00
            },

            {
                nome: "Suco",
                status: false,
                precototal: 0,
                preco: 5.50
            },

            {
                nome: "Cerveja",
                status: false,
                precototal: 0,
                preco: 12.00
            }
        ],

        extras: [
            {
                nome: "Queijo",
                status: false,
                precototal: 0,
                preco: 23.96
            },

            {
                nome: "Pão de Alho",
                status: false,
                precototal: 0,
                preco: 12.96
            }
        ]
    }

    const AddPessoas = (pessoa, quantidade) => {
        if(pessoa == "homem"){
            data.pessoas.homens = quantidade;
        } else if(pessoa == "mulher") {
            data.pessoas.mulher = quantidade;
        } else if(pessoa == "crianca"){
            data.pessoas.crianca = quantidade;
        }
    }

    const ValorTotal = () => {
        data.pessoas.total = data.pessoas.homens + data.pessoas.mulher + data.pessoas.crianca;
    }

    const ValorSemCrianca = () => {
        data.pessoas.totalsemcrianca = data.pessoas.homens + data.pessoas.mulher;
    }

    const TotalCarnes = () => {
        data.pessoas.totalkilos = (data.pessoas.homens*0.6) + (data.pessoas.mulher*0.4) + (data.pessoas.crianca*0.25);
    }

    const TotalLitrosAdultos = () => {
        data.pessoas.totallitrosa = (data.pessoas.homens*2) + (data.pessoas.mulher*1.5);
    }

    const TotalLitrosCrianca = () => {
        data.pessoas.totallitrosc = data.pessoas.crianca*1;
    }

    const AddItem = (opcao) =>{
        if(opcao == "addcarne"){
            data.quantidade.qntCarne+=1;
        }
        else if(opcao == "tiracarne"){
            data.quantidade.qntCarne-=1;
        }
        else if(opcao == "addextra"){
            data.quantidade.qntExtra+=1;
        }
        else if(opcao == "tiraextra"){
            data.quantidade.qntExtra-=1;
        }
        else if(opcao == "addBebida"){
            data.quantidade.qntBebida+=1;
        }
        else if(opcao == "tiraBebida"){
            data.quantidade.qntBebida-=1;
        }
    }

    const AddBebidaCrianca = (opcao) => {
        if(opcao == "addBebidas"){
            data.quantidade.qntBebidac+=1;
        }
        else if(opcao == "tiraBebidas"){
            data.quantidade.qntBebidac-=1;
        }
    }

    const ZeraCarne = () =>{
        data.quantidade.qntCarne = 0;
        data.quantidade.qntExtra = 0;
    }

    const ZeraBebida = () =>{
        data.quantidade.qntBebida = 0;
        data.quantidade.qntBebidac = 0;
    }

    const response = 
    {
        data,
        AddPessoas,
        ValorTotal,
        ValorSemCrianca,
        TotalCarnes,
        TotalLitrosAdultos,
        TotalLitrosCrianca,
        AddItem,
        ZeraBebida,
        ZeraCarne,
        AddBebidaCrianca
    };
   
    return(

        <MainContext.Provider value={response}>
            {children}
        </MainContext.Provider>
    );
}