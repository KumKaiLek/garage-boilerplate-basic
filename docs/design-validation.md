# BA Design Validation — Bootstrap Restyling

## Project

**Project:** IBM × RMIT Capstone Consultancy — Responsible Content-Safety Infrastructure
**Task:** Bootstrap Restyling — Team Page + Login Page
**Role:** Business Analyst (BA)
**Reviewer:** Shriharish Muthumalai Arunkumar
**Design reviewed:** Login Page and Team Page — Desktop and Mobile
**Validation status:** **APPROVED FOR DEVELOPMENT**

## 1. Validation Scope

The UX design was reviewed against:

* Functional Requirements FR-01–FR-11
* Display and Validation Rules DR-01–DR-05
* Edge Cases EC-01–EC-06
* Responsive and readability requirements
* The agreed styling-only scope of the Login Page

The review confirmed that the design represents the agreed Team Page content, Login Page styling requirements, display rules and identified edge cases.

## 2. UX Clarifications Confirmed

The remaining UX decisions were reviewed and confirmed as follows.

### Branding

The design uses the **IBM × RMIT project context** without introducing additional official branding assets that have not been provided or approved.

### Missing Member Photo

When a member photo is unavailable, the design uses a **circular initials-based avatar** as the fallback.

### Long Member Blurbs

Long member blurbs wrap naturally across multiple lines. Member cards expand vertically where required. Text is not truncated and does not overlap other content or break the surrounding layout.

### Responsive Behaviour

The design provides desktop and mobile layouts using approximately:

* **1440px desktop target**
* **390px mobile target**

The Team Page changes from a multi-column grid to one member card per row on smaller screens. The Login Page changes to a single-column mobile layout.

### Login Validation States

The UX design includes the existing:

* Invalid-login validation state
* Empty-field validation state

These states preserve the existing boilerplate validation behaviour.

### Authentication and Access Control

FR-10 and FR-11 preserve the existing authentication and access-control behaviour.

Protected Team Page access and logged-out redirects are implementation requirements. These behaviours must be implemented by the developer and independently verified during testing.

## 3. Requirement Validation

| Requirement                                  | BA Validation Result                                                                                                                               |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **FR-01 — Project / team identity**          | Confirmed. The Team Page clearly identifies the Responsible Content-Safety Infrastructure project and IBM × RMIT Capstone context.                 |
| **FR-02 — Member photo**                     | Confirmed. Member photo/avatar areas are represented, with initials-based fallback for missing photos.                                             |
| **FR-03 — Member name**                      | Confirmed. Full member names are displayed and associated with the correct member.                                                                 |
| **FR-04 — Member role**                      | Confirmed. Each member's approved project role is clearly displayed.                                                                               |
| **FR-05 — Member blurb**                     | Confirmed. Member blurbs are readable and long content is supported through wrapping and vertical card expansion.                                  |
| **FR-06 — Consistent member presentation**   | Confirmed. Member cards use a consistent visual hierarchy and presentation.                                                                        |
| **FR-07 — Login styling**                    | Confirmed. The Login Page has been visually restyled according to the approved UX design.                                                          |
| **FR-08 — Existing authentication**          | Confirmed as preserved in scope. Authentication logic and session behaviour are not changed by the styling work.                                   |
| **FR-09 — Login states**                     | Confirmed. Existing invalid-login and empty-field validation states are represented.                                                               |
| **FR-10 — Protected Team Page access**       | Confirmed as an implementation and testing requirement. Unauthenticated users must not access protected Team Page content.                         |
| **FR-11 — Preserve existing access control** | Confirmed as an implementation requirement. Existing authentication, authorisation, session and role-based access behaviour must remain unchanged. |

## 4. Display and Validation Rule Review

### DR-01 — Missing Photo

**Result: PASS**

The design provides an initials-based circular avatar when a member photo is unavailable. No broken-image presentation is required.

### DR-02 — Long Blurb

**Result: PASS**

Long text wraps across multiple lines and the member card expands vertically as required. No truncation, overlap or layout breakage is expected.

### DR-03 — Multiple Members

**Result: PASS**

All members use a consistent information hierarchy and card structure.

### DR-04 — Readability

**Result: PASS**

The design provides desktop and mobile layouts and maintains readable content across the agreed screen-size targets.

### DR-05 — Consistency

**Result: PASS**

The Login Page and Team Page use a consistent project visual language.

## 5. Edge-Case Review

| Edge Case                                           | BA Validation Result                                                                                     |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **EC-01 — Missing member photo**                    | PASS — initials-based avatar fallback is defined.                                                        |
| **EC-02 — Very long member blurb**                  | PASS — text wraps and cards expand vertically without breaking layout.                                   |
| **EC-03 — Invalid login**                           | PASS — existing validation/error state is represented.                                                   |
| **EC-04 — Empty login fields**                      | PASS — empty-field validation state is represented.                                                      |
| **EC-05 — Several team members**                    | PASS — members maintain a consistent layout and hierarchy.                                               |
| **EC-06 — Unauthenticated direct Team Page access** | DEVELOPER/TESTER VERIFICATION — protected access behaviour must be implemented and independently tested. |

## 6. BA Decision

The UX design has been reviewed against the agreed requirements and the remaining UX questions have been resolved.

The design satisfies the agreed BA requirements for the Team Page and Login Page.

The Login Page remains within the agreed styling scope, while existing authentication, session and access-control behaviour must be preserved.

**BA Decision: APPROVED FOR DEVELOPMENT**

## 7. Developer Handover

Developers may proceed with implementation using the approved UX design and requirements as the baseline.

The following must remain unchanged:

* Existing authentication logic
* Existing session behaviour
* Existing authorisation/access-control behaviour
* Existing login validation behaviour

The developer must also ensure that unauthenticated users cannot directly access protected Team Page content.

## 8. Testing Handover

Independent testing must verify:

* Valid login
* Invalid login
* Empty login fields
* Successful login redirect
* Direct Team Page access while logged out
* Missing member photo
* Long member blurb
* Required member information
* Desktop layout
* Mobile layout
* Preservation of existing authentication and access-control behaviour

## 9. Final Status

**BA STATUS: APPROVED FOR DEVELOPMENT**

**UX STATUS: NO FURTHER BLOCKERS**

**Next stage: Developer Implementation → Independent Testing**
