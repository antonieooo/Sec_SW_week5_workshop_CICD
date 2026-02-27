# Threat Model

This document is completed by students during the lab.

## Assets
- Source code
- CI pipeline
- Secrets
- Build artifacts

## Threat Actors
- External attacker
- Malicious contributor
- Compromised dependency
- Compromised GitHub Action

## Attack Scenarios
- Unpinned GitHub Actions leading to supply-chain compromise
- Dependency poisoning via npm packages
- Secret exfiltration through misconfigured workflows
- Privilege escalation through overly broad workflow permissions
- Malicious pull request triggering unsafe workflows

## Mitigations
- Pin all actions to SHAs
- Use least-privilege `permissions:` blocks
- Add dependency scanning (npm audit)
- Add static analysis (ESLint or CodeQL)
- Restrict workflow triggers
- Require approvals for protected environments

## Student Notes
(Add your analysis and improvements here.)
