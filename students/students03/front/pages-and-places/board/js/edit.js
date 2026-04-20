const editForm = document.querySelector("#editForm")
const writerInput = document.querySelector("#writer")
const titleInput = document.querySelector("#title")
const contentInput = document.querySelector("#content")
const cancelBtn = document.querySelector("#cancelBtn")

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

async function getPostDetail() {
    const {data,error} = await supabaseClient
			.from ('posts')
			.select ('*')
			.eq('id', id)
			.single()

		if (error) {
			console.log("수정할 글 조회 실패: ", error)
			alert("글을 불러오지 못했습니다.")
			location.href = 'list.html'
			return
		}

		console.log("edit 페이지 data", data)
		writerInput.value = data.writer
		titleInput.value = data.title
		contentInput.value = data.content

		cancelBtn.href = `read.html?id=${id}`
}

editForm.addEventListener('submit', async function(e) {
	e.preventDefault();
	const writer = writerInput.value.trim();
	const title = titleInput.value.trim();
	const content = contentInput.value.trim();

	if (writer === ''|| title === '' || content === ''){
		alert('제목, 작성자, 내용을 모두 입력해주세요')
		return
	}

	const {error} = await supabaseClient
		.from('posts')
		.update({
			writer: writer,
			title:title,
			content: content
		})
		.eq('id',id)

		if (error) {
			console.error("수정 실패:", error)
			alert("수정에 실패했습니다")
			return
		}
		alert("수정되었습니다")
		location.href = `read.html?id=${id}`
		return
})

getPostDetail()