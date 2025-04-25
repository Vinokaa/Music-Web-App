export const deleteUser = async (music) => {
    let data = {
        id: music.id
    };

    await fetch("http://localhost:8800/delete", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    window.location.reload();
}