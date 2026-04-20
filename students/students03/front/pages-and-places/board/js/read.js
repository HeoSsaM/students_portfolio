/* UI요소 */
const titleEl = document.querySelector('#title') 
const metaEl = document.querySelector('#meta')
const contentEl = document.querySelector('#content')
const editBtn = document.querySelector("#editBtn")
const deleteBtn = document.querySelector("#deleteBtn")

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function getPosts() {
    const {data, error} = await supabaseClient
			.from ('posts')
			.select ('*')
			.eq('id', id) //테이블 정보의 id 열에서 내가 넘겨받은 id와 동일한 항목
			.single(); //결과가 여러개가 아니라 한 개 글만 보여줌.
		
		if (error) {
			console.error("상세조회 실패:", error)
			alert("글을 불러오지 못했습니다.")
			location.href='list.html'
			return
		}

		titleEl.textContent = data.title;
		metaEl.textContent = `작성자: ${data.writer}`;
		contentEl.textContent = data.content;
		editBtn.href = `edit.html?id=${data.id}`
}

/* 삭제 함수 */
async function deletePost() {
	const really = confirm("정말 삭제하시겠습니까?")

	//confirm 창에서 취소 버튼 클릭했을 때 
	if (!really) return;

	const {data, error} = await supabaseClient
		.from('posts')
		.delete()
		.eq('id', id)

		if (error) {
			console.error("삭제 실패:", error)
			alert('삭제에 실패했습니다.')
			return
		}
		alert('삭제되었습니다')
		location.href = "list.html"
}

deleteBtn.addEventListener('click', deletePost);

getPosts();