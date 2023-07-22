async function obtenerComentarios(){
    const response = await fetch('http://localhost:5207/api/Comment/Index')
    return await response.json();
}

obtenerComentarios().then((comentarios)=>{

    Object.entries(comentarios).forEach(([key, value]) => {
        const tabla = document.getElementById('tbody');
        tabla.innerHTML += `
        <tbody>
              <tr>
                <td>${value.id}</td>
                <td>${value.title}</td>
                <td>${value.description}</td>
                <td>${value.author}</td>
                <td>${value.createdAt}</td>
              </tr>
        </tbody>` 
    })
    
})


