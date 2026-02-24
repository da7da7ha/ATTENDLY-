import supabase from './supabase-client.js';
// GESTION DE LA SESSION UTILISATEUR (localStorage)
            //Sauvegarder utilisateur dans localStorage après login
            export function saveUserSession(userData) {}

            // Récupérer utilisateur connecté
            export function getCurrentUser() {}

            //Déconnexion
            export function logout() {}
// FONCTIONS POUR LES ÉTUDIANTS
            //Voir son profil
            export async function getStudentProfile(studentId) {}

            // Voir son emploi du temps 
            export async function getStudentSchedule(grade, tdGroup) {}

            // Scanner QR code et marquer présence
            export async function markAttendance(studentId, qrCode) {}

            // Voir ses notes
            export async function getStudentNotes(studentId) {}

            //Voir toutes les notes de la classe (pour comparaison)
            export async function getAllNotesForClass(grade) {}

            // Voir notifications d'absence
            export async function getStudentNotifications(studentId) {}

// FONCTIONS POUR LES PROFESSEURS
            //Voir son profil (professeur)
            export async function getProfessorProfile(professorId) {}

            // Créer session avec QR code
            export async function createSession(sessionData) {}

            // Générer code QR unique
            export function generateQRCode(professorId, subject, grade) {}

            //Voir liste de présence d'une session
            export async function getSessionAttendance(sessionId) {}

            //  Ajouter une note pour un étudiant
            export async function addNote(noteData) {}
// FONCTIONS UTILITAIRES
            // Formater date en français (jj/mm/aaaa)
            export function formatDate(date) {
                // date peut être un objet Date ou une chaîne ISO
                // Retourner une chaîne formatée (ex: "21/02/2026")
            }
            //  Formater heure (HH:MM)
            export function formatTime(time) {
                // time peut être une chaîne ou un objet Time
                // Exemple: "14:30:00" -> "14:30"
            }
            // Calculer moyenne des notes
            export function calculateAverage(notes) {}