# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: Allow facilities to save thir custom ids for agents

Acceptance Criteria:

The user interface must be updated to allow facilities to save custom ids for each agent they work with.
The custom ids must be stored in the database and associated with the agents.

Time/Effort Estimate: 8 hours (development and testing)

Implementation Details:

Add a new table to map the agents and their custom id for each company.
Update the user interface to allow facilities to enter custom ids for each agent.
Insert or update the new data in table.


Ticket 2: Update reports to use custom ids

Acceptance Criteria:

Reports must be updated to use the custom ids instead of the internal database ids.

Time/Effort Estimate: 4 hours (development and testing)

Implementation Details:

Modify the getShiftsByFacility function to retrieve the custom ids and include them in the agents metadata.
Modify the generateReport function to use the custom ids instead of the internal database id.
