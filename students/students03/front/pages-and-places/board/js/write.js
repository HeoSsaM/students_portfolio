/* UI 요소 */
const postForm = document.querySelector("#postForm")
const writerInput = document.querySelector("#writer")
const titleInput = document.querySelector("#title")
const contentInput = document.querySelector("#content")

//폼 요소가 전송이 될 때 데이터를 요청해주세여
postForm.addEventListener('submit', async function (e) {
    e.preventDefault(); //a나 button이 가지고 있는 기본 링크 속성을 막음.왜냐면 클릭이 될 때 브라우저가 새로고침을 하므로 이 기능을 막아줌.

    const writer = writerInput.value.trim();
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    //작성자/내용/제목이 없을 때 내용을 입력해주세요라고 알림창에 보여주기
    if (writer === '' || title === '' || content === '') {
        alert("작성자/제목/내용을 입력해주세요")
        return
    }

    const { error } = await supabaseClient
        .from('posts')
        .insert([
            {
                writer: writer,
                title: title,
                content: content
            }
        ]);
    if (error) {
        console.error("등록 실패:", error)
        alert("글 등록에 실패했습니다.")
        return
    }
    alert("글이 등록되었습니다.")
    location.href = "list.html"
})