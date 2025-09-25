// GitHub Copilot puede generar funciones para gestionar miembros
// GitHub Copilot can generate member management functions

function skillsMember() {
    // Copilot can suggest object structures and methods
    return {
        name: '',
        skills: [],
        level: 'beginner',
        
        // Agregar una nueva habilidad
        addSkill: function(skill) {
            if (!this.skills.includes(skill)) {
                this.skills.push(skill);
                return true;
            }
            return false;
        },
        
        // Obtener todas las habilidades
        getSkills: function() {
            return this.skills.join(', ');
        },
        
        // Actualizar nivel de experiencia
        updateLevel: function(newLevel) {
            const validLevels = ['beginner', 'intermediate', 'advanced', 'expert'];
            if (validLevels.includes(newLevel)) {
                this.level = newLevel;
                return true;
            }
            return false;
        },
        
        // Obtener información completa del miembro
        getInfo: function() {
            return {
                name: this.name,
                skills: this.skills,
                level: this.level,
                skillCount: this.skills.length
            };
        }
    };
}

// Crear un ejemplo de uso
const member = skillsMember();
member.name = 'Desarrollador GitHub Copilot';
member.addSkill('JavaScript');
member.addSkill('Python');
member.addSkill('GitHub Copilot');
member.updateLevel('intermediate');

console.log('Member info:', member.getInfo());