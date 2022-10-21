﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Capstone_Connect.Data;
using System.Net.Http.Headers;
using System.Text;
using Capstone_Connect.Model;
using System.Security.Claims;

namespace Capstone_Connect.Handler
{
    public class VisitorHandler : AuthenticationHandler<AuthenticationSchemeOptions>
    {
        private readonly ICapstoneConnectRepo _repository;

        public VisitorHandler(
            ICapstoneConnectRepo repository,
            IOptionsMonitor<AuthenticationSchemeOptions> options,
            ILoggerFactory logger,
            UrlEncoder encoder,
            ISystemClock clock)
            : base(options, logger, encoder, clock)
        {
            _repository = repository;
        }
        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {

            if (!Request.Headers.ContainsKey("Authorization"))
            {
                Response.Headers.Add("WWW-Authenticate", "Basic");
                return AuthenticateResult.Fail("Authorization header not found.");
            }
            else
            {
                var authHeader = AuthenticationHeaderValue.Parse(Request.Headers["Authorization"]);
                var credentialBytes = Convert.FromBase64String(authHeader.Parameter);
                var credentials = Encoding.UTF8.GetString(credentialBytes).Split(":");
                var email = credentials[0];
                var password = credentials[1];

                if (_repository.VisitorLogin(email, password))
                {
                    var claims = new[] { new Claim("Visitor", email) };
                    ClaimsIdentity identity = new ClaimsIdentity(claims, "Basic");
                    ClaimsPrincipal principal = new ClaimsPrincipal(identity);
                    AuthenticationTicket ticket = new AuthenticationTicket(principal, Scheme.Name);
                    return AuthenticateResult.Success(ticket);
                }
                else
                {
                    return AuthenticateResult.Fail("Invalid email or password.");
                }
            }
        }
    }
}