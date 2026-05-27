/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewPrompt } from '../models/NewPrompt';
import type { Prompt } from '../models/Prompt';
import type { PromptResponse } from '../models/PromptResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Returns all prompts from the system that the user has access to
     *
     * @param page page number
     * @param pageSize maximum number of results to return
     * @param sortBy field to sort by
     * @param order sort order
     * @param tags tags to filter by
     * @param q starts with
     * @param detail basic or full
     * @returns Prompt prompt response
     * @throws ApiError
     */
    public static listPrompts(
        page?: number,
        pageSize?: number,
        sortBy?: string,
        order?: 'asc' | 'desc',
        tags?: Array<string>,
        q?: string,
        detail?: string,
    ): CancelablePromise<Array<Prompt>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/prompts',
            query: {
                'page': page,
                'pageSize': pageSize,
                'sortBy': sortBy,
                'order': order,
                'tags': tags,
                'q': q,
                'detail': detail,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Creates a new prompt in the store. Duplicates are allowed
     * @param requestBody Prompt to add to the store
     * @returns Prompt prompt response
     * @throws ApiError
     */
    public static addPrompt(
        requestBody: NewPrompt,
    ): CancelablePromise<Prompt> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/prompts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Returns a prompt based on a single ID, if the user does not have access to the prompt
     * @param id ID of prompt to fetch
     * @returns Prompt prompt response
     * @throws ApiError
     */
    public static getPromptById(
        id: string,
    ): CancelablePromise<Prompt> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/prompts/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Updates a prompt in the store.
     * @param id ID of prompt to fetch
     * @param requestBody Prompt to add to the store
     * @returns Prompt prompt response
     * @throws ApiError
     */
    public static updatePrompt(
        id: string,
        requestBody: Prompt,
    ): CancelablePromise<Prompt> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/prompts/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * deletes a single prompt based on the ID supplied
     * @param id ID of prompt to delete
     * @returns void
     * @throws ApiError
     */
    public static deletePrompt(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/prompts/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Execute a prompt with parameters
     * @param requestBody Parameters for the prompt
     * @param id ID of prompt to execute
     * @param name Name of prompt to execute
     * @returns PromptResponse Prompt execution result
     * @throws ApiError
     */
    public static formatPrompt(
        requestBody: {
            parameters?: Record<string, string>;
        },
        id?: string,
        name?: string,
    ): CancelablePromise<PromptResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/prompts/format',
            query: {
                'id': id,
                'name': name,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid parameters`,
                404: `Prompt not found`,
            },
        });
    }
    /**
     * Execute a prompt with parameters
     * @param requestBody Optional Overrides for the prompt, except for Parameters Values which will be taken from the request body
     * @param id ID of prompt to execute
     * @param name Name of prompt to execute
     * @param provider LLM Provider
     * @param llm LLM to use for execution
     * @param maxTokens Maximum number of tokens to generate
     * @param temperature Temperature for LLM generation (0.0-1.0)
     * @returns PromptResponse Prompt execution result
     * @throws ApiError
     */
    public static executePrompt(
        requestBody: {
            /**
             * Override the prompt with a custom prompt. Used for tests.
             */
            content?: string;
            /**
             * Override the parameters with a custom list of parameters. Used for tests.
             */
            parameters?: Array<string>;
            /**
             * Override the output format. Used for tests.
             */
            format?: 'json' | 'text' | 'markdown';
            /**
             * Override the format instructions with custom instructions. Used for tests.
             */
            formatInstructions?: string;
            parametersValues?: Record<string, string>;
        },
        id?: string,
        name?: string,
        provider?: 'OPENAI' | 'MISTRAL' | 'GOOGLEAI' | 'ANTHROPIC' | 'OLLAMA',
        llm?: string,
        maxTokens?: number,
        temperature: number = 0.7,
    ): CancelablePromise<PromptResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/prompts/execute',
            query: {
                'id': id,
                'name': name,
                'provider': provider,
                'llm': llm,
                'maxTokens': maxTokens,
                'temperature': temperature,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid parameters`,
                404: `Prompt not found`,
            },
        });
    }
}
