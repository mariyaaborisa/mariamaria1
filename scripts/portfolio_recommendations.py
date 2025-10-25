"""Generate tailored portfolio recommendations for different audiences.

The console output mirrors the React audience selector on the landing page and
acts as a lightweight content planning tool before you revise a case study or
application packet.
"""
from __future__ import annotations

from dataclasses import dataclass
from typing import Iterable, Sequence


@dataclass(frozen=True)
class AudienceProfile:
    """Describes a specific portfolio audience."""

    name: str
    priorities: tuple[str, ...]
    highlight_sections: tuple[str, ...]


@dataclass(frozen=True)
class Recommendation:
    """A concrete suggestion for tailoring the portfolio."""

    heading: str
    talking_points: tuple[str, ...]
    call_to_action: str


def build_recommendations(profile: AudienceProfile) -> Sequence[Recommendation]:
    """Create actionable recommendations for an audience profile."""

    if profile.name == "Hiring Managers":
        return (
            Recommendation(
                heading="Show measurable trust & safety wins",
                talking_points=(
                    "Quantify time-to-detection improvements or reduced exposure to online harm.",
                    "Add human impact quotes from policy or operations partners.",
                ),
                call_to_action="Link to dashboards or experiments that prove the signal.",
            ),
            Recommendation(
                heading="Demonstrate cross-functional leadership",
                talking_points=(
                    "Explain how you influenced roadmap decisions with research artifacts.",
                    "Name the partner roles—engineering, ops, policy—you rallied and how.",
                ),
                call_to_action="Attach a retrospective or sprint summary slide.",
            ),
        )

    if profile.name == "Fellowship Committees":
        return (
            Recommendation(
                heading="Connect your mission to the program",
                talking_points=(
                    "Translate long-term research questions into the fellowship's language.",
                    "Summarize how your community collaborations advance ethical technology goals.",
                ),
                call_to_action="Draft a one-page theory of change with short, mid, and long-term outcomes.",
            ),
            Recommendation(
                heading="Highlight scholarly rigor",
                talking_points=(
                    "Surface methods training (ethnography, OSINT, participatory design).",
                    "Map each featured project to a methodological competency or publication.",
                ),
                call_to_action="Add citations or reading lists that inspired the work.",
            ),
        )

    return (
        Recommendation(
            heading="Invite collaboration",
            talking_points=(
                "State the experiments or pilots where you want feedback right now.",
                "Share tooling preferences and working rhythms to ease onboarding.",
            ),
            call_to_action="Embed a quick intake form for partners.",
        ),
        Recommendation(
            heading="Document community care",
            talking_points=(
                "Outline how you compensate or support collaborators.",
                "List safety protocols or accessibility commitments you maintain.",
            ),
            call_to_action="Publish a lightweight memorandum of understanding template.",
        ),
    )


def render_profile(profile: AudienceProfile, recommendations: Sequence[Recommendation]) -> str:
    """Return a formatted, human-readable summary."""

    header = f"Audience: {profile.name}\nPriorities:"
    priorities_block = "\n".join(f"- {priority}" for priority in profile.priorities)

    sections_header = "Suggested sections:"
    sections_block = "\n".join(f"  • {section}" for section in profile.highlight_sections)

    rec_lines = []
    for index, rec in enumerate(recommendations, start=1):
        talking_points = "\n".join(f"      - {point}" for point in rec.talking_points)
        block = (
            f"{index}. {rec.heading}\n"
            f"{talking_points}\n"
            f"      → Next step: {rec.call_to_action}"
        )
        rec_lines.append(block)

    recommendations_block = "\n".join(rec_lines)

    return (
        f"{header}\n{priorities_block}\n\n{sections_header}\n{sections_block}\n\nRecommendations:\n"
        f"{recommendations_block}"
    )


def print_portfolio_recommendations(profiles: Iterable[AudienceProfile]) -> None:
    """Print recommendations for each profile with spacing between entries."""

    for profile in profiles:
        recommendations = build_recommendations(profile)
        output = render_profile(profile, recommendations)
        print(output)
        print("\n" + "=" * 60 + "\n")


if __name__ == "__main__":
    audience_profiles = (
        AudienceProfile(
            name="Hiring Managers",
            priorities=(
                "Proof of measurable impact",
                "Evidence of cross-functional collaboration",
                "Fast onboarding to regulated spaces",
            ),
            highlight_sections=(
                "Impact dashboards",
                "Rapid experimentation logs",
                "Trust & safety response playbooks",
            ),
        ),
        AudienceProfile(
            name="Fellowship Committees",
            priorities=(
                "Alignment with program mission",
                "Scholarly rigor",
                "Community reciprocity",
            ),
            highlight_sections=(
                "Theory of change",
                "Long-term research narratives",
                "Community testimonials",
            ),
        ),
        AudienceProfile(
            name="Collaborators",
            priorities=(
                "Shared values",
                "Co-creation practices",
                "Accessible onboarding",
            ),
            highlight_sections=(
                "Collaboration roadmap",
                "Tooling preferences",
                "Care and accessibility agreements",
            ),
        ),
    )

    print_portfolio_recommendations(audience_profiles)
