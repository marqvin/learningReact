


function Lista({titulo, itens}){
    return (
        <>
            <h1>{titulo}</h1>
            <ul>
                <Item listaProduto={itens[1]} />
                <Item listaProduto={itens[0]} />
                <Item listaProduto={itens[2]} />
                
                
            </ul>
            
        </>
    );
}


function Item({listaProduto}){
    return (
        <>
            <li>{listaProduto.id} - {listaProduto.title}</li>
        </>
    )
}

export { Lista }