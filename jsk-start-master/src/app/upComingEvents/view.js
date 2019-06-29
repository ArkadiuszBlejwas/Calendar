export const renderEventsForToday = (events) => {
    const html = `
            <table class="${events.length === 0 ? 'is-hidden': 'table table-hover'}">
                <thead>
                    <tr>
                        <th scope="col">Today's events</th>
                    </tr>
                </thead>
            ${events.map(element => `
                <tr class="table-primary">
                    <td>${element.title}</td>
                </tr>
            `).join('')}
        `;

    const eventListNode = document.querySelector('#todayEvents');
    eventListNode.innerHTML = "";
    eventListNode.insertAdjacentHTML('afterbegin', html);
}

export const renderEventsForTomorrow = (events) => {
    const html = `
            <table class="${events.length === 0 ? 'is-hidden': 'table table-hover'}">
                <thead>
                    <tr>
                        <th scope="col">Tomorrow's events</th>
                    </tr>
                </thead>
            ${events.map(element => `
                <tr class="table-success">
                    <td>${element.title}</td>
                </tr>
            `).join('')}
        `;

    
    const eventListNode = document.querySelector('#tomorrowEvents');
    eventListNode.innerHTML = "";
    eventListNode.insertAdjacentHTML('afterbegin', html);
}