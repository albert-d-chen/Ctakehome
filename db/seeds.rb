# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Physician.delete_all
Appointment.delete_all

physician1 = Physician.create!(
    first_name: 'Julius',
    last_name: 'Hibbert'
)
physician2 = Physician.create!(
    first_name: 'Algernop',
    last_name: 'Krieger'
)
physician3 = Physician.create!(
    first_name: 'Nick',
    last_name: 'Riviera'
)

appointment1 = Appointment.create!(
    name: 'Sterling Archer',
    time: '8:00AM',
    kind: 'New Patient',
    physician_id: physician2.id
)
appointment2 = Appointment.create!(
    name: 'Cyril Figis',
    time: '8:30AM',
    kind: 'Follow-up',
    physician_id: physician2.id
)
appointment3 = Appointment.create!(
    name: 'Ray Gilette',
    time: '9:00AM',
    kind: 'Follow-up',
    physician_id: physician2.id
)
appointment4 = Appointment.create!(
    name: 'Lana Kane',
    time: '9:30AM',
    kind: 'New Patient',
    physician_id: physician2.id
)
appointment5 = Appointment.create!(
    name: 'Pam Poovey',
    time: '10:00AM',
    kind: 'New Patient',
    physician_id: physician2.id
)

appointment6 = Appointment.create!(
    name: 'Stephen Curry',
    time: '8:00AM',
    kind: 'New Patient',
    physician_id: physician1.id
)
appointment7 = Appointment.create!(
    name: 'Klay Thompson',
    time: '8:30AM',
    kind: 'Follow-up',
    physician_id: physician1.id
)
appointment8 = Appointment.create!(
    name: 'Draymond Green',
    time: '9:00AM',
    kind: 'Follow-up',
    physician_id: physician1.id
)
appointment9 = Appointment.create!(
    name: 'Andre Iguodala',
    time: '9:30AM',
    kind: 'New Patient',
    physician_id: physician1.id
)
appointment10 = Appointment.create!(
    name: 'Kevin Durant',
    time: '10:00AM',
    kind: 'New Patient',
    physician_id: physician1.id
)

appointment11 = Appointment.create!(
    name: 'Harry Potter',
    time: '8:00AM',
    kind: 'New Patient',
    physician_id: physician3.id
)
appointment12 = Appointment.create!(
    name: 'Hermione Granger',
    time: '8:30AM',
    kind: 'Follow-up',
    physician_id: physician3.id
)
appointment13 = Appointment.create!(
    name: 'Ron Weasley',
    time: '9:00AM',
    kind: 'Follow-up',
    physician_id: physician3.id
)
appointment14 = Appointment.create!(
    name: 'Draco Malfoy',
    time: '9:30AM',
    kind: 'New Patient',
    physician_id: physician3.id
)
appointment15 = Appointment.create!(
    name: 'Sirius Black',
    time: '10:00AM',
    kind: 'New Patient',
    physician_id: physician3.id
)