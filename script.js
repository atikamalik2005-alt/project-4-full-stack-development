const API_URL = 'http://localhost:5000/api/students';

// Load students on page load
document.addEventListener('DOMContentLoaded', loadStudents);

async function loadStudents() {
    try {
        showLoading(true);
        
        const response = await fetch(API_URL);
        const data = await response.json();

        if (response.ok) {
            displayStudents(data.data);
        } else {
            showError(data.message);
        }
    } catch (error) {
        showError('Failed to load students: ' + error.message);
    } finally {
        showLoading(false);
    }
}

function displayStudents(students) {
    const tableBody = document.getElementById('studentTableBody');
    const noStudentsDiv = document.getElementById('noStudents');
    
    if (!students || students.length === 0) {
        tableBody.innerHTML = '';
        noStudentsDiv.style.display = 'block';
        document.getElementById('studentTable').style.display = 'none';
        return;
    }

    noStudentsDiv.style.display = 'none';
    document.getElementById('studentTable').style.display = 'table';

    tableBody.innerHTML = students.map(student => `
        <tr>
            <td><strong>${escapeHtml(student.name)}</strong></td>
            <td>${escapeHtml(student.email)}</td>
            <td>${student.age}</td>
            <td><span class="grade-badge grade-${student.grade}">${student.grade}</span></td>
            <td>${escapeHtml(student.course)}</td>
            <td>
                <div class="actions">
                    <button onclick="editStudent('${student._id}')" class="btn btn-success">
                        ✏️ Edit
                    </button>
                    <button onclick="deleteStudent('${student._id}')" class="btn btn-danger">
                        🗑️ Delete
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function editStudent(id) {
    window.location.href = `edit.html?id=${id}`;
}

async function deleteStudent(id) {
    if (!confirm('Are you sure you want to delete this student?')) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        const data = await response.json();

        if (response.ok) {
            alert('✅ Student deleted successfully!');
            loadStudents();
        } else {
            alert('❌ Error: ' + data.message);
        }
    } catch (error) {
        alert('❌ Error: ' + error.message);
    }
}

function searchStudents() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const rows = document.querySelectorAll('#studentTableBody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchInput) ? '' : 'none';
    });
}

function filterByGrade() {
    const grade = document.getElementById('filterGrade').value;
    const rows = document.querySelectorAll('#studentTableBody tr');
    
    rows.forEach(row => {
        const gradeCell = row.querySelector('.grade-badge');
        if (!grade) {
            row.style.display = '';
        } else if (gradeCell) {
            row.style.display = gradeCell.textContent === grade ? '' : 'none';
        }
    });
}

function showLoading(show) {
    const loadingDiv = document.getElementById('loading');
    const tableContainer = document.getElementById('studentTableContainer');
    
    if (show) {
        loadingDiv.style.display = 'block';
        tableContainer.style.display = 'none';
    } else {
        loadingDiv.style.display = 'none';
        tableContainer.style.display = 'block';
    }
}

function showError(message) {
    const tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = `
        <tr>
            <td colspan="6" style="text-align: center; color: #fc8181; padding: 40px;">
                ❌ ${escapeHtml(message)}
            </td>
        </tr>
    `;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}