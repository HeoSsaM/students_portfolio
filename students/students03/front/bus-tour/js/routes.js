import { busRoutes } from "./busData.js";

const routeGrid = document.querySelector(".routeGrid");

busRoutes.forEach((route) => {
    const card = document.createElement("div");
    card.classList.add("route-card");

    card.innerHTML = `
        <div class="route-card-header">
            <h3 class="route-number">${route.number} 버스</h3>
            <h2 class="route-title">${route.title}</h2>
        </div>

        <p class="route-scenery">
            ${route.scenery}
        </p>

        <div class="route-info">
            <p><strong>음악</strong> ${route.music}</p>
            <p><strong>추천 시간</strong> ${route.bestTime}</p>
            <p><strong>창가 방향</strong> ${route.windowSide}</p>
            <p><strong>소요 시간</strong> ${route.duration}</p>
        </div>

        <div class="route-landmarks">
            <h4>주요 경유지</h4>
            <ul>
                ${route.landmarks.map(place => `<li>${place}</li>`).join("")}
            </ul>
        </div>
    `;

    routeGrid.appendChild(card);
});