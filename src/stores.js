import { writable } from "svelte/store";

/*
    groupID List
    0: Strukturierte Programm Labor
    1. CABS
    2: Webdesign
    3: Interface und Interaktionsdesign
    4: Englisch
    5: Mathe
*/

export let currentHoverID = writable(7);

export let selectables = writable([

    // Strukturierte Programm Labor groupID: 0 
    {id: 0, groupID: 0, slotID: 2, fach:"Labor: Strukturierte Programm."},
    {id: 1, groupID: 0, slotID: 3, fach:"Labor: Strukturierte Programm."},
    {id: 2, groupID: 0, slotID: 5, fach:"Labor: Strukturierte Programm."},
    {id: 3, groupID: 0, slotID: 6, fach:"Labor: Strukturierte Programm."},
    {id: 4, groupID: 0, slotID: 7, fach:"Labor: Strukturierte Programm."},
    // CABS groupID: 1
    {id: 5, groupID: 1, slotID: 2, fach:"Labor: CABS."},
    {id: 6, groupID: 1, slotID: 3, fach:"Labor: CABS."},
    {id: 7, groupID: 1, slotID: 6, fach:"Labor: CABS."},
    {id: 8, groupID: 1, slotID: 7, fach:"Labor: CABS."},
    {id: 9, groupID: 1, slotID: 20, fach:"Labor: CABS."},
    //Webdisign groupID: 2
    {id: 10, groupID: 2, slotID: 12, fach:"Labor: Webdesign"},
    {id: 11, groupID: 2, slotID: 13, fach:"Labor: Webdesign"},
    {id: 12, groupID: 2, slotID: 25, fach:"Labor: Webdesign"},
    {id: 13, groupID: 2, slotID: 26, fach:"Labor: Webdesign"},
    {id: 14, groupID: 2, slotID: 27, fach:"Labor: Webdesign"},
    // Interface und Interaktionsdesign groupID: 3
    {id: 15, groupID: 3, slotID: 7, fach:"Labor: Interface und Interaktionsdesign"},
    {id: 16, groupID: 3, slotID: 8, fach:"Labor: Interface und Interaktionsdesign"},
    {id: 17, groupID: 3, slotID: 9, fach:"Labor: Interface und Interaktionsdesign"},
    {id: 18, groupID: 3, slotID: 10, fach:"Labor: Interface und Interaktionsdesign"},
    {id: 19, groupID: 3, slotID: 11, fach:"Labor: Interface und Interaktionsdesign"},
    //English groupID: 4
    {id: 20, groupID: 4, slotID: 12, fach:"V/Ü: English"},
    {id: 21, groupID: 4, slotID: 14, fach:"V/Ü: English"},
    {id: 22, groupID: 4, slotID: 21, fach:"V/Ü: English"},
    {id: 23, groupID: 4, slotID: 22, fach:"V/Ü: English"},
    //Mathe groupID: 5
    {id: 24, groupID: 5, slotID: 19, fach:"Ü: Mathe"},
    {id: 25, groupID: 5, slotID: 26, fach:"Ü: Mathe"},
    {id: 26, groupID: 5, slotID: 27, fach:"Ü: Mathe"},
]);


export let slot = writable([
    //Montag
    {id: 0, fach: "Vorlesung: Strukturierte Programmierung", time:"Mo, 08:15-09:45 Uhr" },
    {id: 1, fach: "Vorlesung: Interface- und Interaktionsdesign", time:"Mo, 10.00-11:30 Uhr" },
    {id: 2, fach: "", time:"Mo, 12:15-13:45 Uhr" },
    {id: 3, fach: "", time:"Mo, 14:00-15:30 Uhr" },
    {id: 4, fach: "", time:"Mo, 15:45-17:15 Uhr" },
    {id: 5, fach: "", time:"Mo, 17:30-19:00 Uhr" },
    //Dienstag
    {id: 6, fach: "", time:"Di, 08:15-09:45 Uhr" },
    {id: 7, fach: "", time:"Di, 10.00-11:30 Uhr" },
    {id: 8, fach: "", time:"Di, 12:15-13:45 Uhr" },
    {id: 9, fach: "", time:"Di, 14:00-15:30 Uhr" },
    {id: 10, fach: "", time:"Di, 15:45-17:15 Uhr" },
    {id: 11, fach: "", time:"Di, 17:30-19:00 Uhr" },
    //Mitwoch
    {id: 12, fach: "", time:"Mi, 08:15-09:45 Uhr" },
    {id: 13, fach: "", time:"Mi, 10.00-11:30 Uhr" },
    {id: 14, fach: "", time:"Mi, 12:15-13:45 Uhr" },
    {id: 15, fach: "Vorlesung: Mathematik", time:"Mi, 14:00-15:30 Uhr" },
    {id: 16, fach: "Vorlesung: CABS", time:"Mi, 15:45-17:15  Uhr" },
    {id: 17, fach: "", time:"Mi, 17:30-19:00 Uhr" },
    //Donnerstag
    {id: 18, fach: "", time:"Do, 08:15-09:45 Uhr" },
    {id: 19, fach: "", time:"Do, 10.00-11:30 Uhr" },
    {id: 20, fach: "", time:"Do, 12:15-13:45 Uhr" },
    {id: 21, fach: "", time:"Do, 14:00-15:30 Uhr" },
    {id: 22, fach: "", time:"Do, 15:45-17:15 Uhr" },
    {id: 23, fach: "", time:"Do, 17:30-19:00 Uhr" },
    //Freitag
    {id: 24, fach: "Vorlesung: Webdesign", time:"Fr, 08:15-09:45 Uhr" },
    {id: 25, fach: "", time:"Fr, 10.00-11:30 Uhr" },
    {id: 26, fach: "", time:"Fr, 12:15-13:45 Uhr" },
    {id: 27, fach: "", time:"Fr, 14:00-15:30 Uhr" },
    {id: 28, fach: "", time:"Fr, 15:45-17:15 Uhr" },
    {id: 29, fach: "", time:"Fr, 17:30-19:00 Uhr" },

]);

