const resp = fetch('http://localhost:5097/api/Comment');

resp.then(response => response.json())
    .then((json) => {
        console.log(json);
        let htmlX = "";
        let content = document.getElementById('container')

        json.forEach(element => {
            let htlmCard = `
            <tr>
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            ${element.title}
            </td>
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            ${element.description}
            </td>
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            ${element.author}
            </td>
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            ${element.createdAt}
            </td>
            
            </tr>
      </table>
    `
        htmlX = htmlX + htlmCard;
        });

        content.innerHTML = htmlX;
    });