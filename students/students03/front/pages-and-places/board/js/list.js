/* UI 요소 */
const postList = document.querySelector("#postList")

//수파베이스에 데이터 요청
async function getPosts() {
    const {data,error} = await supabaseClient
			.from ('posts')
			.select ('*')
			.order ('id', {ascending: false});
			//console.log('data :', data)
		if (error) {
			console.error("목록 불러오기 실패", error)
			postList.innerHTML = `<li class="empty-message">글 목록을 불러오지 못했습니다.</li>`
			return
		}

		renderPosts(data);
}

function renderPosts(posts) {
	//console.log('posts :', posts)

	if (posts.length === 0){
		postList.innerHTML = `<li class="empty-message">등록된 글이 없습니다.</li>`
		return
	}

	postList.innerHTML = ''

	posts.forEach((post) => {
		//console.log(post)
		postList.innerHTML += `
		<li class='post-item'>
			<a href='read.html?id=${post.id}'>
				<h3>${post.title}</h3>
			</a>
			<p class='post-meta'>작성자: ${post.writer}</p>
			<p class='post-content'>${post.content}</p>
		</li>
		`
	})
}


getPosts()