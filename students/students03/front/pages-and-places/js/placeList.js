import { supabase } from "./supabase-config.js";

const placeList = document.querySelector("#placeList")

async function getPlaces() {
  placeList.innerHTML = `<div class="loading-box">장소 정보를 불러오는 중입니다...</div>`;

  const { data, error } = await supabase
    .from("places")
    .select("*")
    .order("id", { ascending: true });
  console.log('data:', data)

  if (error) {
    console.error("장소 목록 조회 실패:", error);
    placeList.innerHTML = `<div class="empty-box">장소 정보를 불러오지 못했습니다.</div>`;
    return;
  }

  if (!data || data.length === 0) {
    placeList.innerHTML = `<div class="empty-box">등록된 장소 정보가 없습니다.</div>`;
    return;
  }
  let html = "";

  data.forEach((place) => {
    html += `
      <div class="place-card">
        <img src="${place.image}" alt="${place.location}">
        <div class="card-content">
          <h3>${place.title}</h3>
          <p class="location">${place.location}</p>
          <p class="place">작품 | ${place.book}</p>
          <a href="./detail.html?id=${place.id}" class="detail-btn">자세히 보기</a>
        </div>
      </div>
    `
  });

  placeList.innerHTML = html;
}

getPlaces();